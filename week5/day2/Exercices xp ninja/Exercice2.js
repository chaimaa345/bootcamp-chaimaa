let resolveAfter2Seconds = function () {
    console.log("starting slow promise"); // Logs immediately
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done"); // Logs after 2 seconds
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise"); // Logs immediately
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done"); // Logs after 1 second
        }, 1000);
    });
};

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all=='); // Logs after 1 sec due to setTimeout
    return Promise.all([
        resolveAfter2Seconds(),  // Starts timer (2s)
        resolveAfter1Second()    // Starts timer (1s)
    ]).then((messages) => {
        console.log(messages[0]); // "slow"
        console.log(messages[1]); // "fast"
    });
}

setTimeout(concurrentPromise, 1000); // Delays execution by 1 second
/* output : (after 1 second delay)
==CONCURRENT START with Promise.all==
starting slow promise
starting fast promise
(after 1 more second)
fast promise is done
(after another 1 second)
slow promise is done
slow
fast
*/