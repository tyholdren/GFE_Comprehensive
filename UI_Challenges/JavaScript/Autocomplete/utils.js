export function debounce(fn, delay) {
  let timeoutId = null;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
      clearTimeout(timeoutId);
    }, delay);
  };
}
