//console.log("promises");


// - What is a promise in javaScript?
// - Callback to promise
// - Understanding Promise States
// - How Promises are resolved and rejected
// - Handling Promises
// - Promise Chain 
// - Handling Multiple Promises
// - Handling cancel a promise
// - That pizzaHub App
// - Tasks and Assognments

/*
let promise = new Promise(function(resolve, reject){

});

console.log(promise);

// Executor function

function executor(resolve, reject){

    // Logic goes here

    resolve()
    reject()
    resolve()

}

// Promise State 

    // - pending - Initially when the executor function starts the execution.
    // - fulfilled - when the promise is resolved
    // - rejected - When the Promise is rejected

// result-
    // undefined- Initially when the state value is pending.
    // value- When resolve(value) is called
    // error- when reject(error) is called

// - how promises are resoved and rejected

/*
let promise1 = new Promise(function(resolve, reject){
    resolve("Hey, I am done!");
})

let promise2 = new Promise(function(resolve, reject){
    reject("Something is not right!");
})


let anontherPromise = new Promise(function(resolve, reject){
    resolve("I am surely going to get resolved!");

    reject(new Error(" will this be ignored?")); // ignored
    resolve("Ignored?"); // ignored
})

console.log(anontherPromise)
*/
