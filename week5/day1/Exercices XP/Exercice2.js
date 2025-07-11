const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000); // 4000 milliseconds = 4 seconds
});

// To test it
myPromise.then(result => console.log(result));
