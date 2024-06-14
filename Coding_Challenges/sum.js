/**
 * https://www.greatfrontend.com/questions/javascript/sum
 * @param {number} value
 * @return {Function}
 */
export default function sum(valueA) {
  return function (valueB) {
    if (valueB === undefined) {
      return valueA;
    }
    return sum(valueA + valueB);
  };
}
