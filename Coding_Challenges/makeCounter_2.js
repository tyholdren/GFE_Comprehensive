/**
 * https://www.greatfrontend.com/interviews/study/amazon/questions/javascript/make-counter-ii
 * @param {number} initialValue
 * @return {{get: Function, increment: Function, decrement: Function, reset: Function }}
 */
export default function makeCounter(initialValue = 0) {
  const storedValue = initialValue;
  let value = storedValue;

  return {
    get: function () {
      return value;
    },
    increment: function () {
      value += 1;
      return value;
    },
    decrement: function () {
      value -= 1;
      return value;
    },
    reset: function () {
      value = storedValue;
      return value;
    },
  };
}
