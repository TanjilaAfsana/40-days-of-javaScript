// - Promises: what are the problems?
// - Promise to await
// - async function
// - async/ await together
// - Does await make things synchronous
// - Error Handling with async/await
// - Project Example
// - Top Level await
// - Multiple async/await
// - PizzaHub example with async and await 
// - Tasks ans assignments

/*
async function foo(){
    return 101;
    // return Promise.resolve(101)
}

/*
foo().then(function(result){
    console.log(result)
})


async function tacklepromise() {
    const retVar = await foo();
    console.log(retVar);
    return retVar;

    
}
console.log(tacklepromise());
*/
//const retVar =await foo(); // now foo() return a promise type value,,,when i need actual value i use await befor function call that means foo()call
//console.log(retVar);

/*
const errorPromise = new Promise((resolve, reject) =>{
    //resolve(`resolved correctly`);
    reject ('Error Occured!');

})

async function handleErrorPromise() {
    try{
        const result =  await errorPromise;
        console.log( 'result is',result)
    }catch(error) {
        console.log(`Caught error `, error)
    }
  
}

handleErrorPromise();
*/

//errorPromise.catch((error) => console.error(error));

/*
(
    async () => {
        let response = await fetch('http://localhost:3000/api/pizzahub');
        let stores = await response;

        console.log(stores);
    }
)();

*/

// multiple async handle

const BULDASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';

const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';

const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

async function resolvePokemons() {
    const responses =  Promise.allSettled([
    fetch(BULDASAUR_POKEMONS_URL),
    fetch(RATICATE_POKEMONS_URL),
    fetch(KAKUNA_POKEMONS_URL)
]);
//console.log(responses);

const result = await responses;
console.log(result)

const PK_1 = await result[0]?.value.json();
const PK_2 = await result[1]?.value.json();
const PK_3 = await result[2]?.value.json();

console.log(PK_1);
console.log(PK_2);
console.log(PK_3);

}

//resolvePokemons()


async function resolvePokemonsV2() {
    const responses1 = await Promise.allSettled([
    fetch(BULDASAUR_POKEMONS_URL).then(response => response.json()),
    fetch(RATICATE_POKEMONS_URL).then(response => response.json()),
    fetch(KAKUNA_POKEMONS_URL).then(response => response.json())
]);
console.log(responses1);

}
//resolvePokemonsV2();

// self practice
/*
function enroll(){
    const promise = new Promise((resolve, reject)=>{
        (setTimeout(()=>{
            console.log("cooking");
            resolve("done cooking");

        },2000))
    })
    return promise;
}

enroll()
.then((result)=> console.log(result))
*/


// Using Promise concept
/*
function order(){
    const order = new Promise((resolve, reject)=>{
        resolve("Order received");
    })
    return order;
}

function cook(){
    const cook = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Cooking...");
            resolve("Food Cooked");
        },2000)
    })
    return cook;
}

function serve(){
    return Promise.resolve("Food is served");
}

order()
    .then(
        (res)=>{
            console.log(res);
            return cook();
        } 
    )
    .then((result)=>{
        console.log(result);
        return serve();
    })
    .then((result)=>{
        console.log(result);
    });


console.log("Welcome to my Restaurent");
*/


// Using Async await concept :

// order function
/*
function order(){
    return Promise.resolve("Order received");
}

function cook(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("Cooking...");
            resolve("Food cooked");
        },2000)
    })
}

function  serve(){
    return Promise.resolve("Food Served");
}

// Asysnc function to handle the flow
async function processOrder(){

    const orderResult = await order();
    console.log(orderResult);

    const cookResult = await cook();
    console.log(cookResult);

    const serveResult = await serve();
    console.log(serveResult)

}

// Call the async function
processOrder();
*/

// async await with fetch

 async function getPokemon() {
    try{

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
        console.log(response);
        //console.log(response);

        // console.log(response.body);
        // console.log(response.status);
         // console.log(response.ok);
       // console.log(response.url);
        // console.log(response.headers)

        const data =  await response.json();
        console.log(data);
        
       /*  console.log(data.name)
        console.log(response.body); */

        if(response.status === 200){
            throw new Error("Error")
        }

    }catch(err){
         console.log(err.message);

    }
    

 }

 getPokemon();








