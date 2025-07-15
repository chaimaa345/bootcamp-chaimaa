let resolveAfter2Seconds = function () {
    console.log("starting slow promise"); // Immediately logs this
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done"); // Logs after 2 sec
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise"); // Immediately logs this
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done"); // Logs after 1 sec
        }, 1000);
    });
};

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START=='); // Logs immediately
    const slow = await resolveAfter2Seconds(); 
    // Waits 2 sec, then logs "slow promise is done"
    console.log(slow); // Logs "slow"
    
    const fast = await resolveAfter1Second(); 
    // Waits 1 sec, then logs "fast promise is done"
    console.log(fast); // Logs "fast"
}

sequentialStart(); // Runs the whole thing
/* ==SEQUENTIAL START==
starting slow promise
wait 2 seconds...
slow promise is done
slow
starting fast promise
 wait 1 second...
fast promise is done
fast
*/

