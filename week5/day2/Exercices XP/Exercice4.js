function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);//Returns a Promise that resolves after 2 seconds with the value 'resolved'
    });
}

async function asyncCall() {
    console.log('calling');//It logs "calling" immediately
    let result = await resolveAfter2Seconds();
    console.log(result);//Then it waits (await) for the resolveAfter2Seconds() promise to resolve (which takes 2 seconds)
}//Once resolved, it logs "resolved"

asyncCall(); //output: calling
//(resume after 2 seconds...)
//resolved