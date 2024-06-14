/**
 * https://www.greatfrontend.com/questions/javascript/size
 * Gets the size of `collection` by returning its length for array-like values or the number of own enumerable string keyed properties for objects.
 *
 * @param {Array | Object | Map | Set | string | null | undefined} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 */
export default function size(collection) {
  if (Array.isArray(collection) || typeof collection === 'string') {
    return collection.length;
  }

  if (collection instanceof Map || collection instanceof Set) {
    return collection.size;
  }

  if (typeof collection === 'object' && collection !== null) {
    return Object.keys(collection).length;
  }

  return 0;
}
