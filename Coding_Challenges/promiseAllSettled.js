/**
 * https://www.greatfrontend.com/questions/javascript/promise-all-settled
 * @param {Array} iterable
 * @return {Promise<Array<{status: 'fulfilled', value: *}|{status: 'rejected', reason: *}>>}
 */
export default async function promiseAllSettled(iterable) {
  const results = new Array(iterable.length);

  let count = 0;

  return new Promise(resolve => {
    if (results.length === 0) resolve(results);
    iterable.forEach(async (promise, index) => {
      try {
        const value = await promise;
        results[index] = { status: 'fulfilled', value };
      } catch (reason) {
        results[index] = { status: 'rejected', reason };
      } finally {
        count += 1;
        if (count === iterable.length) {
          resolve(results);
        }
      }
    });
  });
}
