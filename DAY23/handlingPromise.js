// - Handling Promises

// .then()

let loading = false;
const promiseHandle = new Promise(function(resolve, reject){
    loading = true;
    // Make a Network call(API call/IO operation)
    reject("I am rejected...");

});


promiseHandle.then(
    (result) => {console.log(result)},
    //null; //- when  reject hanle by then without resolve parameter
    //(error) => {console.log(error)}
).catch(
    (error) => {console.log(error)}
).finally(
    () => {
        console.log("finally!")
        loading = false;
    }
)
// .catch()
// .finally()

console.log("hello");