/**
 * https://www.greatfrontend.com/interviews/study/amazon/questions/javascript/function-bind
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {Function}
 */
Function.prototype.myBind = function (thisArg, ...argArray) {
  const fn = this;

  return function (...addtlArgs) {
    return fn.apply(thisArg, [...argArray, ...addtlArgs]);
  };
};
