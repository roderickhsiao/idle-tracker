import ACTIVE_EVENTS from './active-events';
import supportPassiveEvent from './supportPassiveEvent';

const DEFAULT_CALLBACK = (_ : CallbackPayload) => {};
const DEFAULT_THROTTLE = 500;
const DEFAULT_TIMEOUT = 30000;

interface CallbackPayload {
  idle: boolean,
  event?: Event
}

const defaultEventOption = {
  capture: false,
  passive: false,
};

class IdleTracker {
  callback: ({
    idle,
    event,
  }: CallbackPayload) => void;

  events: Array<Event['type']>;

  listeners: Array<Event['type']>;

  throttleTime: number;

  timeout: number;

  timer: ReturnType<typeof setTimeout> | null;

  state: {
    idle: boolean;
    lastActive: number;
  };

  constructor({
    timeout = DEFAULT_TIMEOUT,
    onIdleCallback = DEFAULT_CALLBACK,
    events = ACTIVE_EVENTS,
    throttle = DEFAULT_THROTTLE,
  }) {
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

  start = ({
    onIdleCallback,
  }: { onIdleCallback?: VoidFunction | undefined } = {}) => {
    this.callback = onIdleCallback || this.callback;
    this.handleEvent = this.handleEvent.bind(this);

    this.listeners = this.events.map((eventName) => {
      document.addEventListener(
        eventName,
        this.handleEvent,
        supportPassiveEvent ? defaultEventOption : false,
      );
      return eventName;
    });

    this.startTimer.call(this);
  };

  startTimer = () => {
    this.state.lastActive = Date.now();
    this.resetTimer();
  };

  handleEvent = (e: Event) => {
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

  resetTimer = (e?: Event) => {
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
      this.listeners.forEach((eventName) => document.removeEventListener(
        eventName,
        this.handleEvent,
        supportPassiveEvent ? defaultEventOption : false,
      ));
    }
    this.clearTimer();
  };
}

export default IdleTracker;
