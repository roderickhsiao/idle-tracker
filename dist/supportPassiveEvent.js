"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let passiveSupported = false; // eslint-disable-line  import/no-mutable-exports
if (typeof window !== 'undefined') {
    try {
        const options = Object.defineProperty({}, 'passive', {
            get() {
                passiveSupported = true;
                return false;
            },
        });
        const func = () => undefined;
        window.addEventListener('test', func, options);
        window.removeEventListener('test', func, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
exports.default = passiveSupported;
