interface CallbackPayload {
    idle: boolean;
    event?: Event;
}
declare class IdleTracker {
    callback: ({ idle, event, }: CallbackPayload) => void;
    events: Array<Event['type']>;
    listeners: Array<Event['type']>;
    throttleTime: number;
    timeout: number;
    timer: ReturnType<typeof setTimeout> | null;
    state: {
        idle: boolean;
        lastActive: number;
    };
    constructor({ timeout, onIdleCallback, events, throttle, }: {
        timeout?: number | undefined;
        onIdleCallback?: ((_: CallbackPayload) => void) | undefined;
        events?: string[] | undefined;
        throttle?: number | undefined;
    });
    start: ({ onIdleCallback, }?: {
        onIdleCallback?: VoidFunction | undefined;
    }) => void;
    startTimer: () => void;
    handleEvent: (e: Event) => void;
    resetTimer: (e?: Event) => void;
    isIdle: () => boolean;
    clearTimer: () => void;
    end: () => void;
}
export default IdleTracker;
