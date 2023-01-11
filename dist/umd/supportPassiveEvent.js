(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.supportPassiveEvent = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  var passiveSupported = false; // eslint-disable-line  import/no-mutable-exports

  if (typeof window !== 'undefined') {
    try {
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passiveSupported = true;
          return false;
        }
      });
      var func = function func() {
        return undefined;
      };
      window.addEventListener('test', func, options);
      window.removeEventListener('test', func, options);
    } catch (err) {
      passiveSupported = false;
    }
  }
  var _default = passiveSupported;
  _exports["default"] = _default;
});