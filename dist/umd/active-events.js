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
    global.activeEvents = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports["default"] = void 0;
  var ACTIVE_EVENTS = ['change', 'keydown', 'mousedown', 'mousemove', 'mouseup', 'orientationchange', 'resize', 'scroll', 'touchend', 'touchmove', 'touchstart', 'visibilitychange'];
  var _default = ACTIVE_EVENTS;
  _exports["default"] = _default;
});