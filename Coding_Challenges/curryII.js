/**
 * https://www.greatfrontend.com/questions/javascript/curry-ii
 * @param {Function} func
 * @return {Function}
 */
export default function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    let context = this;

    return function (...remainingArgs) {
      return curried.apply(context, [...args, ...remainingArgs]);
    };
  };
}
