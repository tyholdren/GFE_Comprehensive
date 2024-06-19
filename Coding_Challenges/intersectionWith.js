/**
 * https://www.greatfrontend.com/questions/javascript/intersection-with
 * @param {Function} comparator - The comparator function used to determine equality between elements.
 * @param {...Array} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the elements that are present in all given arrays.
 */
export default function intersectionWith(comparator, ...arrays) {
  if (arrays.length === 0) return [];

  const result = [];
  const firstArray = arrays[0];

  for (let i = 0; i < firstArray.length; i += 1) {
    let foundInAllArrays = true;
    let firstArrayItem = firstArray[i];

    for (let j = 1; j < arrays.length; j += 1) {
      let curArray = arrays[j];
      let foundInCurArray = false;

      for (let k = 0; k < curArray.length; k += 1) {
        let curItem = curArray[k];
        if (comparator(firstArrayItem, curItem)) {
          foundInCurArray = true;
          break;
        }
      }

      if (!foundInCurArray) {
        foundInAllArrays = false;
      }
    }

    if (foundInAllArrays) {
      result.push(firstArrayItem);
    }
  }

  return result;
}
