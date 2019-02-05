import ACTIVE_EVENTS from './active-events';

const DEFAULT_CALLBACK = () => undefined;
const DEFAULT_THROTTLE = 500;
const DEFAULT_TIMEOUT = 30000;

class IdleTracker {
  constructor({
    timeout = DEFAULT_TIMEOUT,
    onIdleCallback = DEFAULT_CALLBACK,
    events = ACTIVE_EVENTS,
    throttle = DEFAULT_THROTTLE
  }) {
    this.callback = onIdleCallback;
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

  start = ({ onIdleCallback } = {}) => {
    this.callback = onIdleCallback || this.callback;
    this.listeners = this.events.map(eventName => {
      document.addEventListener(eventName, this.handleEvent.bind(this), false);
      return eventName;
    });

    this.startTimer.call(this);
  };

  startTimer = () => {
    this.state.lastActive = Date.now();
    this.resetTimer();
  };

  handleEvent = e => {
    const time = Date.now();

    if ((time - this.state.lastActive < this.throttleTime)) {
      // throttle on change
      return;
    }

    if (e.type === 'mousemove' || e.type === 'touchmove') {
      this.resetTimer();
    }

    // only evoke callback when value change
    if (this.state.idle) {
      this.callback({ idle: false });
    }

    this.state.idle = false;
    this.resetTimer();
  };

  resetTimer = () => {
    const time = Date.now();
    this.clearTimer(this.timer);

    this.state.lastActive = time;

    this.timer = setTimeout(() => {
      if (!this.state.idle) {
        this.callback({ idle: true });
      }
      this.state.idle = true;
      this.resetTimer();
    }, this.timeout);
  };

  isIdle = () => this.state.idle;

  clearTimer = timer => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  end = () => {
    if (this.listeners.length) {
      this.listeners.forEach(
        eventName => document.removeEventListener(eventName, this.handleEvent)
      );
    }
    this.clearTimer(this.timer);
  };
}

export default IdleTracker;
