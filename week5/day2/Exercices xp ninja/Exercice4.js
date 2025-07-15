// Function that returns a promise that resolves after 2 seconds
let resolveAfter2Seconds = function () {
    console.log("starting slow promise"); 
    // Logged immediately when the function is called

    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow"); 
            // The promise is resolved with "slow" after 2 seconds
            console.log("slow promise is done"); 
            // This log appears right after the resolution
        }, 2000); // 2-second delay
    });
};

// Function that returns a promise that resolves after 1 second
let resolveAfter1Second = function () {
    console.log("starting fast promise"); 
    // Logged immediately when the function is called

    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast"); 
            // The promise is resolved with "fast" after 1 second
            console.log("fast promise is done"); 
            // This log appears right after the resolution
        }, 1000); // 1-second delay
    });
};

// This function demonstrates parallel execution using .then()
// NOTE: There is no error handling (e.g., no .catch or try/catch)
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then=='); 
    // Logged first when this function runs

    // Start both promises in parallel
    resolveAfter2Seconds().then((message) => console.log(message)); 
    // Will log "slow" after 2 seconds

    resolveAfter1Second().then((message) => console.log(message)); 
    // Will log "fast" after 1 second
}

// Run the function after a 13-second delay
setTimeout(parallelPromise, 13000); 
/* [13s] ==PARALLEL with Promise.then==
[13s] starting slow promise
[13s] starting fast promise
[14s] fast promise is done
[14s] fast
[15s] slow promise is done
[15s] slow
 */
