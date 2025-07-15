// Define a function that returns a promise resolved after 2 seconds
let resolveAfter2Seconds = function () {
    console.log("starting slow promise"); // [at t=5s] Logs immediately when called
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");                    // Resolved after 2s
            console.log("slow promise is done"); // [t=7s] Logged after 2 seconds
        }, 2000); // Delay of 2000ms (2 seconds)
    });
};

// Define a function that returns a promise resolved after 1 second
let resolveAfter1Second = function () {
    console.log("starting fast promise"); // [at t=5s] Logs immediately when called
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");                   // Resolved after 1s
            console.log("fast promise is done"); // [t=6s] Logged after 1 second
        }, 1000); // Delay of 1000ms (1 second)
    });
};

// Async function to run both promises in parallel using Promise.all
let parallel = async function () {
    console.log('==PARALLEL with await Promise.all=='); // [t=5s] Initial log

    await Promise.all([ // Starts both async tasks at the same time
        // IIFE 1: Runs resolveAfter2Seconds, logs result when it's done
        (async () => console.log(await resolveAfter2Seconds()))(),

        // IIFE 2: Runs resolveAfter1Second, logs result when it's done
        (async () => console.log(await resolveAfter1Second()))()
    ]);

    // Promise.all ensures the main function waits until both inner async functions complete
}

// Delay execution of the parallel function by 5 seconds
setTimeout(parallel, 5000);


/* expected output 
[5s] ==PARALLEL with await Promise.all==
[5s] starting slow promise
[5s] starting fast promise
[6s] fast promise is done
[6s] fast
[7s] slow promise is done
[7s] slow
*/

