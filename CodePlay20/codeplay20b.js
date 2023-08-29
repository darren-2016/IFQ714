const newPromise = new Promise(function (resolve, reject) {
    try {
        let answer = 5 + 5;
        resolve(answer);
    } catch (error) {
        reject(error);
    }
});

function resolveCallback (result) { console.log(`Result is: ${result}`);}
function rejectCallback (error) { console.log(`Error is: ${error.message}`);}

/*newPromise.then(
    resolveCallback,
    rejectCallback
);
*/

function promiseFunction () {
    return new Promise(function (resolve, reject) {
        try {
            let answer = 5 + 5;
            resolve(answer);
        } catch (error) {
            reject (error);
        }
    });
}

promiseFunction().then(resolveCallback, rejectCallback);
