"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const active_events_1 = __importDefault(require("./active-events"));
const supportPassiveEvent_1 = __importDefault(require("./supportPassiveEvent"));
const DEFAULT_CALLBACK = (_) => { };
const DEFAULT_THROTTLE = 500;
const DEFAULT_TIMEOUT = 30000;
const defaultEventOption = {
    capture: false,
    passive: false,
};
class IdleTracker {
    callback;
    events;
    listeners;
    throttleTime;
    timeout;
    timer;
    state;
    constructor({ timeout = DEFAULT_TIMEOUT, onIdleCallback = DEFAULT_CALLBACK, events = active_events_1.default, throttle = DEFAULT_THROTTLE, }) {
        this.callback = onIdleCallback;
        this.events = events;
        this.listeners = [];
        this.throttleTime = throttle;
        this.timeout = timeout;
        this.timer = null;
        this.state = {
            idle: false,
            lastActive: 0,
        };
    }
    start = ({ onIdleCallback, } = {}) => {
        this.callback = onIdleCallback || this.callback;
        this.handleEvent = this.handleEvent.bind(this);
        this.listeners = this.events.map((eventName) => {
            document.addEventListener(eventName, this.handleEvent, supportPassiveEvent_1.default ? defaultEventOption : false);
            return eventName;
        });
        this.startTimer.call(this);
    };
    startTimer = () => {
        this.state.lastActive = Date.now();
        this.resetTimer();
    };
    handleEvent = (e) => {
        const time = Date.now();
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
                idle: false,
            });
        }
        this.state.idle = false;
        this.resetTimer();
    };
    resetTimer = (e) => {
        const time = Date.now();
        this.clearTimer();
        this.state.lastActive = time;
        this.timer = setTimeout(() => {
            if (!this.state.idle) {
                this.callback({ event: e, idle: true });
            }
            this.state.idle = true;
            this.resetTimer(e);
        }, this.timeout);
    };
    isIdle = () => this.state.idle;
    clearTimer = () => {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    end = () => {
        if (this.listeners.length) {
            this.listeners.forEach((eventName) => document.removeEventListener(eventName, this.handleEvent, supportPassiveEvent_1.default ? defaultEventOption : false));
        }
        this.clearTimer();
    };
}
exports.default = IdleTracker;
