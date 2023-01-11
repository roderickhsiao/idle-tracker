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
export default passiveSupported;