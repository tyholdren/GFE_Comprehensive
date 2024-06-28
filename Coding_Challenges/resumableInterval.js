/**
 * https://www.greatfrontend.com/questions/javascript/resumable-interval
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {{start: Function, pause: Function, stop: Function}}
 */
export default function createResumableInterval(callback, delay, ...args) {
  let isStopped = false;
  let intervalId = null;

  return {
    start: () => {
      if (!isStopped) {
        if (intervalId === null) {
          callback.apply(this, args);
        }
        intervalId = setInterval(() => {
          callback.apply(this, args);
        }, delay);
      }
    },

    pause: () => {
      clearInterval(intervalId);
      intervalId = null;
    },

    stop: () => {
      isStopped = true;
      clearInterval(intervalId);
    },
  };
}
