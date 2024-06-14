/**
 * https://www.greatfrontend.com/questions/javascript/group-by
 * @param {Array} array The array to iterate over.
 * @param {Function|string} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
export default function groupBy(array, iteratee) {
  const obj = {};

  if (array.length === 0) return obj;

  array.forEach(value => {
    const key = iteratee(value);

    if (obj.hasOwnProperty(key)) {
      obj[key].push(value);
    } else {
      obj[key] = [value];
    }
  });

  return obj;
}
