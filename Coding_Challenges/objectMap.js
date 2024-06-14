/**
 * https://www.greatfrontend.com/questions/javascript/object-map
 * @param {Object} obj
 * @param {Function} fn
 * @returns Object
 */
export default function objectMap(obj, fn) {
  const newObj = {};

  for (const [key, val] of Object.entries(obj)) {
    newObj[key] = fn.apply(obj, [val]);
  }

  return newObj;
}
