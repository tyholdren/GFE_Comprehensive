/**
 * https://www.greatfrontend.com/questions/javascript/max-by
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 */
export default function maxBy(array, iteratee) {
  let result, computed;

  for (let i = 0; i < array.length; i += 1) {
    const curResult = iteratee(array[i]);
    if (curResult && (computed === undefined || curResult > computed)) {
      computed = curResult;
      result = array[i];
    }
  }

  return result;
}
