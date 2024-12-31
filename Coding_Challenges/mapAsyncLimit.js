/**
 * https://www.greatfrontend.com/questions/javascript/map-async-limit?format=javascript
 * @param {Array<any>} iterable
 * @param {Function} callbackFn
 * @param {number} size
 *
 * @return {Promise}
 */
export default function mapAsyncLimit(iterable, callbackFn, size = Infinity) {
  const results = Array(iterable.length).fill(null);
  let resolved = 0;
  let nextIndex = 0;

  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      resolve(results);
    }

    function processItem(index) {
      nextIndex += 1;
      callbackFn(iterable[index])
        .then(result => {
          results[index] = result;
          resolved += 1;

          if (resolved === iterable.length) {
            resolve(results);
            return;
          } else if (nextIndex < iterable.length) {
            processItem(nextIndex);
          }
        })
        .catch(reject);
    }

    for (let i = 0; i < Math.min(size, iterable.length); i += 1) {
      processItem(i);
    }
  });
}
