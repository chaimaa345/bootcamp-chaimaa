let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');

    // Start both promises immediately (they run in parallel)
    const slow = resolveAfter2Seconds();  // starts 2s timer
    const fast = resolveAfter1Second();   // starts 1s timer

    // Waits for slow to finish
    console.log(await slow); // prints "slow" after 2s
    console.log(await fast); // already resolved, prints "fast" immediately after
}

setTimeout(concurrentStart, 4000); // starts after 4s delay
/* (4 seconds delay first due to setTimeout)

==CONCURRENT START with await==
starting slow promise
starting fast promise
 1 second...
fast promise is done
 another 1 second (2s total)
slow promise is done
slow
fast
Promises start together, not one after the other

Execution time: 2 seconds total


  */