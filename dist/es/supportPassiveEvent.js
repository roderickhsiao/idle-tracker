"use strict";

exports.__esModule = true;
exports.default = void 0;
var passiveSupported = false; // eslint-disable-line  import/no-mutable-exports

if (typeof window !== 'undefined') {
  try {
    var options = Object.defineProperty({}, 'passive', {
      get() {
        passiveSupported = true;
        return false;
      }
    });
    var func = () => undefined;
    window.addEventListener('test', func, options);
    window.removeEventListener('test', func, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var _default = passiveSupported;
exports.default = _default;