(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./active-events", "./supportPassiveEvent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./active-events"), require("./supportPassiveEvent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.activeEvents, global.supportPassiveEvent);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _activeEvents, _supportPassiveEvent) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  _activeEvents = _interopRequireDefault(_activeEvents);
  _supportPassiveEvent = _interopRequireDefault(_supportPassiveEvent);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  var DEFAULT_CALLBACK = function DEFAULT_CALLBACK(_) {};
  var DEFAULT_THROTTLE = 500;
  var DEFAULT_TIMEOUT = 30000;
  var defaultEventOption = {
    capture: false,
    passive: false
  };
  var IdleTracker = function IdleTracker(_ref) {
    var _this = this;
    var _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? DEFAULT_TIMEOUT : _ref$timeout,
      _ref$onIdleCallback = _ref.onIdleCallback,
      _onIdleCallback = _ref$onIdleCallback === void 0 ? DEFAULT_CALLBACK : _ref$onIdleCallback,
      _ref$events = _ref.events,
      events = _ref$events === void 0 ? _activeEvents["default"] : _ref$events,
      _ref$throttle = _ref.throttle,
      throttle = _ref$throttle === void 0 ? DEFAULT_THROTTLE : _ref$throttle;
    this.start = function (_temp) {
      var _ref2 = _temp === void 0 ? {} : _temp,
        onIdleCallback = _ref2.onIdleCallback;
      _this.callback = onIdleCallback || _this.callback;
      _this.handleEvent = _this.handleEvent.bind(_this);
      _this.listeners = _this.events.map(function (eventName) {
        document.addEventListener(eventName, _this.handleEvent, _supportPassiveEvent["default"] ? defaultEventOption : false);
        return eventName;
      });
      _this.startTimer.call(_this);
    };
    this.startTimer = function () {
      _this.state.lastActive = Date.now();
      _this.resetTimer();
    };
    this.handleEvent = function (e) {
      var time = Date.now();
      if (time - _this.state.lastActive < _this.throttleTime) {
        // throttle on change
        return;
      }
      if (e.type === 'mousemove' || e.type === 'touchmove') {
        _this.resetTimer(e);
      }

      // only evoke callback when value change
      if (_this.state.idle) {
        _this.callback({
          event: e,
          idle: false
        });
      }
      _this.state.idle = false;
      _this.resetTimer();
    };
    this.resetTimer = function (e) {
      var time = Date.now();
      _this.clearTimer();
      _this.state.lastActive = time;
      _this.timer = setTimeout(function () {
        if (!_this.state.idle) {
          _this.callback({
            event: e,
            idle: true
          });
        }
        _this.state.idle = true;
        _this.resetTimer(e);
      }, _this.timeout);
    };
    this.isIdle = function () {
      return _this.state.idle;
    };
    this.clearTimer = function () {
      if (_this.timer) {
        clearTimeout(_this.timer);
        _this.timer = null;
      }
    };
    this.end = function () {
      if (_this.listeners.length) {
        _this.listeners.forEach(function (eventName) {
          return document.removeEventListener(eventName, _this.handleEvent, _supportPassiveEvent["default"] ? defaultEventOption : false);
        });
      }
      _this.clearTimer();
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
  };
  var _default = IdleTracker;
  _exports["default"] = _default;
});