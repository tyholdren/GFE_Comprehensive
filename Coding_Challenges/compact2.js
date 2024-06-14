/**
 * https://www.greatfrontend.com/questions/javascript/compact-ii
 * @param {Array|Object} value
 * @return {Array|Object}
 */
export default function compact(value) {
  if (typeof value !== 'object' || value === null) return value;

  if (Array.isArray(value)) {
    const newArray = [];

    value.forEach(el => {
      if (el) {
        newArray.push(compact(el));
      }
    });
    return newArray;
  }

  const newObj = {};
  for (const [key, val] of Object.entries(value)) {
    if (val) {
      newObj[key] = compact(val);
    }
  }

  return newObj;
}
