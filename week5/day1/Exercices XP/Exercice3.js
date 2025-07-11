const resolvedPromise = Promise.resolve(3);

resolvedPromise.then(value => console.log("Resolved with:", value));

const rejectedPromise = Promise.reject("Boo!");

rejectedPromise.catch(error => console.log("Rejected with:", error));
