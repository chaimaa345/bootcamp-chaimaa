const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

// Use Promise.all to run all promises
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // Output: [3, 42, "foo"]
  })
  .catch(error => {
    console.log("A promise was rejected:", error);
  });

/*
📝 Explanation:

- `Promise.all()` accepts an array of promises or values.
- It returns a new promise that:
    Resolves when **all input promises are fulfilled**
   Rejects **immediately** if **any** input promise is rejected

- In our case:
  - `promise1` resolves instantly with `3`
  - `promise2` is just a number (not a real promise), but `Promise.all()` wraps it automatically in a resolved promise
  - `promise3` resolves after 3 seconds with the value `"foo"`

 After about 3 seconds, `Promise.all()` returns:
 `[3, 42, "foo"]`

If any of them failed (e.g., `promise3` used `reject()`), then `.catch()` would run instead.
*/
