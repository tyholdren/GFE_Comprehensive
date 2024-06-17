function throttle(fn, duration) {
  let isThrottled = false;
  let timeoutId = null;

  return function (...args) {
    if (!isThrottled) {
      isThrottled = true;
      func.apply(this, args);

      timeoutId = setTimeout(() => {
        isThrottled = false;
        clearTimeout(timeoutId);
      }, duration);
    }
  };
}
