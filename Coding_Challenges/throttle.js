function throttle(fn, duration) {
  let isThrottled = false;
  let timeoutId = null;

  return function (...args) {
    if (!isThrottled) {
      isThrottled = true;

      timeoutId = setTimeout(() => {
        isThrottled = false;
        return fn.apply(this, args);
      }, duration);
    }
  };
}
