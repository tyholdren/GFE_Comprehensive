/**
 * https://www.greatfrontend.com/questions/javascript/resumable-interval
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {{start: Function, pause: Function, stop: Function}}
 */
export default function createResumableInterval(callback, delay, ...args) {
  let intervalId = null;
  let isStopped = false;

  return {
    start: () => {
      if (isStopped || intervalId !== null) {
        return;
      }

      callback(...args);
      intervalId = setInterval(() => {
        callback.apply(this, args);
      }, delay);
    },

    pause: () => {
      clearInterval(intervalId);
      intervalId = null;
    },

    stop: () => {
      isStopped = true;
      clearInterval(intervalId);
      intervalId = null;
    },
  };
}
