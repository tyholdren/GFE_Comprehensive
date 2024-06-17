/**
 * https://www.greatfrontend.com/questions/javascript/min-by
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
export default function minBy(array, iteratee) {
  let minValue, minResult;

  for (let i = 0; i < array.length; i += 1) {
    const curResult = iteratee(array[i]);
    if (curResult && (minResult === undefined || curResult < minResult)) {
      minValue = array[i];
      minResult = curResult;
    }
  }
  return minValue;
}
