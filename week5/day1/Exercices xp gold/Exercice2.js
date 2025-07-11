// A function that returns a Promise which resolves to double the input number
function timesTwoAsync(x) {
  // Immediately resolve the promise with x * 2
  return new Promise(resolve => resolve(x * 2));
}
// An array of numbers
const arr = [1, 2, 3];

// We use map to apply the timesTwoAsync function to each item in the array.
// This returns a new array where each item is a Promise.
const promiseArr = arr.map(timesTwoAsync);

// Use Promise.all to run all promises in parallel
// Promise.all takes an array of promises and waits for ALL of them to resolve.
// If all resolve, it returns an array of results in the same order.
// If any one rejects, the entire Promise.all rejects.
Promise.all(promiseArr)
  .then(result => {
        // Once all promises are resolved, this function runs.
    // The result is an array of the resolved values: [2, 4, 6]
    console.log(result);// Expected output: [2, 4, 6]
  });