/**
 * https://www.greatfrontend.com/questions/javascript/fill
 * @param {Array} array - The array to fill.
 * @param {*} value - The value to fill array with.
 * @param {number} [start=0] - The start position.
 * @param {number} [end=array.length] - The end position.
 * @return {Array} Returns the filled array.
 */
export default function fill(array, value, start = 0, end = array.length) {
  if (start < 0) {
    start = array.length - Math.abs(start);
  }

  if (end < 0) {
    end = array.length - Math.abs(end);
  }

  if (end < start) {
    return array;
  }

  for (let i = 0; i < array.length; i += 1) {
    if (i >= start && i < end) {
      array[i] = value;
    }
  }

  return array;
}
