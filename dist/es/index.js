"use strict";

exports.__esModule = true;
exports.default = void 0;
var _activeEvents = _interopRequireDefault(require("./active-events"));
var _supportPassiveEvent = _interopRequireDefault(require("./supportPassiveEvent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DEFAULT_CALLBACK = _ => {};
var DEFAULT_THROTTLE = 500;
var DEFAULT_TIMEOUT = 30000;
var defaultEventOption = {
  capture: false,
  passive: false
};
class IdleTracker {
  constructor(_ref) {
    var _this = this;
    var {
      timeout = DEFAULT_TIMEOUT,
      onIdleCallback: _onIdleCallback = DEFAULT_CALLBACK,
      events = _activeEvents.default,
      throttle = DEFAULT_THROTTLE
    } = _ref;
    this.start = function (_temp) {
      var {
        onIdleCallback
      } = _temp === void 0 ? {} : _temp;
      _this.callback = onIdleCallback || _this.callback;
      _this.handleEvent = _this.handleEvent.bind(_this);
      _this.listeners = _this.events.map(eventName => {
        document.addEventListener(eventName, _this.handleEvent, _supportPassiveEvent.default ? defaultEventOption : false);
        return eventName;
      });
      _this.startTimer.call(_this);
    };
    this.startTimer = () => {
      this.state.lastActive = Date.now();
      this.resetTimer();
    };
    this.handleEvent = e => {
      var time = Date.now();
      if (time - this.state.lastActive < this.throttleTime) {
        // throttle on change
        return;
      }
      if (e.type === 'mousemove' || e.type === 'touchmove') {
        this.resetTimer(e);
      }

      // only evoke callback when value change
      if (this.state.idle) {
        this.callback({
          event: e,
          idle: false
        });
      }
      this.state.idle = false;
      this.resetTimer();
    };
    this.resetTimer = e => {
      var time = Date.now();
      this.clearTimer();
      this.state.lastActive = time;
      this.timer = setTimeout(() => {
        if (!this.state.idle) {
          this.callback({
            event: e,
            idle: true
          });
        }
        this.state.idle = true;
        this.resetTimer(e);
      }, this.timeout);
    };
    this.isIdle = () => this.state.idle;
    this.clearTimer = () => {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    };
    this.end = () => {
      if (this.listeners.length) {
        this.listeners.forEach(eventName => document.removeEventListener(eventName, this.handleEvent, _supportPassiveEvent.default ? defaultEventOption : false));
      }
      this.clearTimer();
    };
    this.callback = _onIdleCallback;
    this.events = events;
    this.listeners = [];
    this.throttleTime = throttle;
    this.timeout = timeout;
    this.timer = null;
    this.state = {
      idle: false,
      lastActive: 0
    };
  }
}
var _default = IdleTracker;
exports.default = _default;