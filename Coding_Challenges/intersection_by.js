/**
 * https://www.greatfrontend.com/questions/javascript/intersection-by
 * @param {Function} iteratee - The iteratee function to apply to each value.
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
export default function intersectionBy(iteratee, ...arrays) {
  if (arguments.length === 1) return [];

  const map = new Map();
  const firstArray = arrays[0];

  firstArray.forEach(el => {
    const result = iteratee(el);
    if (!map.has(result)) {
      map.set(result, el);
    }
  });

  const mapKeys = Array.from(map.keys());

  for (let i = 1; i < arrays.length; i += 1) {
    if (arrays[i].length === 0) return [];

    const transformedArray = new Set([...arrays[i].map(iteratee)]);

    mapKeys.forEach(key => {
      if (!transformedArray.has(key)) {
        map.delete(key);
      }
    });
  }

  return Array.from(map.values());
}
