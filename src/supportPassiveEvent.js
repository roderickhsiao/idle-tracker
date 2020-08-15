let passiveSupported = false; // eslint-disable-line import/no-mutable-exports

if (typeof window !== 'undefined') {
  try {
    const options = Object.defineProperty({}, 'passive', {
      get() {
        passiveSupported = true;
        return false;
      }
    });

    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch (err) {
    passiveSupported = false;
  }
}

export default passiveSupported;
