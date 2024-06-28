/**
 * @param {any} value
 * @param {Function} fn
 * @returns any
 */
function deepMap(value, fn) {
  return mapHelper(value, fn, value);
}

function isPlainObject(value) {
  if (value === null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

function mapHelper(value, fn, context) {
  if (Array.isArray(value)) {
    return value.map(el => mapHelper(el, fn, context));
  }
  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, val]) => [
        key,
        mapHelper(val, fn, context),
      ])
    );
  }

  return fn.apply(context, [value]);
}
