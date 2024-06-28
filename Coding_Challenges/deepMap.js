/**
 * https://www.greatfrontend.com/questions/javascript/deep-map
 * @param {any} value
 * @param {Function} fn
 * @returns any
 */
export default function deepMap(value, fn) {
  if (Array.isArray(value)) {
    const deepArr = [];

    for (let i = 0; i < value.length; i += 1) {
      deepArr.push(deepMap(value[i], fn.bind(this)));
    }
    return deepArr;
  } else if (typeof value === 'object') {
    const deepObj = {};
    for (const [key, val] of Object.entries(value)) {
      deepObj[key] = deepMap(val, fn.bind(this));
    }
    return deepObj;
  } else {
    return fn(value);
  }
}
