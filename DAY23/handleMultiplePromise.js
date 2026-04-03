// Handle Multiple Promises


// Promise.all([promises])

// আমাদের custom getPromise function
/*
from chatGpt:

function getPromise(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          reject("Error: " + response.status); // যদি response error হয়
        }
        return response.json(); // JSON আকারে ডেটা নাও
      })
      .then(data => resolve(data)) // ডেটা resolve করো
      .catch(err => reject(err));  // error handle করো
  });
}
  */

// From video


 function getPromise(URL){
    return fetch(URL)
    .then((response) =>{
        if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }

    return response.json();

    });
    
}


const BULDASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';

const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';

const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';





let promise_1 = getPromise(BULDASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL );
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

/*
Promise.all([promise_1, promise_2, promise_3])
.then((result)=>{
    console.log(result);

})
.catch((error)=>{
    console.error(error)

})


Promise.any([promise_1, promise_2, promise_3])
.then((result)=>{
    console.log(result);

})
.catch((error)=>{
    console.error(error)

})

*/


// settling a promise = fulfilling(resolve) + rejecting
/*
Promise.allSettled([promise_1, promise_2, promise_3])
.then((result)=>{
    console.log(result);

})
.catch((error)=>{
    console.error(error)

})
    */

// race

Promise.race([promise_1, promise_2, promise_3])
.then((result)=>{
    console.log((result));

})
.catch((error)=>{
    console.error(error)

})

//Promise.resolve() is same as 
let promise = new Promise(resolve => resolve(value))

Promise.reject()
let promise1 = new Promise((resolve,reject)=> reject(error));


// How to cancel a promise --- interview question

// JavaScript Promises Promise cannot be cancelled. If someone is saying Promise can be canceled ,, no promise cannot be cancelled. It is the Process which return the promise that can be cnacelled . 

// you can cancel the process through which you were returning the promise means you will be able to cancel fetch call using something called abort controller and the signal. 