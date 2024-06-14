/**
 * https://www.greatfrontend.com/questions/javascript/once
 * @template {Function} T
 * @param {T} func
 * @return {T}
 */
export default function once(func) {
  let isCalled = false;
  let initialResult = undefined;

  return function (...args) {
    if (!isCalled) {
      isCalled = true;
      initialResult = func.apply(this, args);
    }
    return initialResult;
  };
}
