// - Promise chain

// Rule 1: Every Promise gives you a .then() handler method. Every rejected promise provides you a .catch() handler.


// Rule 2: You can do mainly three valuable things from the .then() method. You can return another promise(for async operator). You can return any other value from a synchronous operation. Lastly, you can throw an error.



// Create a Promise 

let getUser = new Promise(function(resolve, reject){
    const user = {
        name: 'john Doe',
        email: 'jdoe@email.com',
        password: 'jdoe.password',
        permissions: ['db', 'hr', 'dev']
    };

    resolve(user);
});

/*getUser
   .then(
     function(res){
        console.log(`get user  ${res.name}`);


        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve('Bangalore');

            },2000)

        })

     })

     .then((address) => {
        console.log(`User address is ${address}`)
     })
        */


// Return a simple value from the .then() handler

/*
const setTime = new Promise((resolve,reject) =>{
    setTimeout(function(){
        resolve("Bangalor");
    }, 2000)
})

getUser
    .then((user)=>{
        console.log(`Got user ${user.name}`);
        
        console.log(`${user.email}`);
        return user.password;
    })
    .then ((password) =>{
        console.log(`User email is ${password} `)
        return setTime;
    })
    .then((result)=>{
        console.log(result)
    })
        
        


// Throw an error from the .then() handler

getUser
    .then((user)=>{
        console.log(`Got user ${user.name}`);

        if(!user.permissions.includes("hr")){
            throw new Error('you are not allowed to access the HR module');
        }

        return user.email;
    })
    .then((email) =>{
        console.log(email)
    })
    .catch((err)=>{
        console.error(err)

    });

    */



// Rule 3: You can rethrow from the .catch() handler to handle the error  later . In this case, the control will go to the next closest .catch() handler.

let promise404 = new Promise(function(resolve,reject){
    reject(404)
});

promise404
    .catch((error)=>{
        console.log(error);
        if(error === 404){
            console.log("Rethrowing 404");
            throw error;
        }else{
            // Do something
        }

    })
    .then ((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(`handling ${error} here`);
    })


// Rule 4- Unlike .then() and .catch(), the .finally() handler doesn't process the result value or error . It just passes the result as is to the next handler.


// Create a Promise

let promiseFinally = new Promise((resolve, reject) => {
    resolve(' Testing Finally.');
});

promiseFinally
    .finally(() =>{
        console.log('Running Finally!')
    })

    .then(function(result){
        console.log(result);
    })

// Rule 5- Calling the .then() handler method multiple times on a single promise is NOT chaining. (very very important rule for interview Question)

//Create Promise

let  promise01 = new Promise((resolve, reject)=>{
    resolve(10);
});

// calling the .then() method multiple times
// on a single promise - it's not a chain

promise01.then(function(value){
    value++;
    return value;
});

promise01.then(function(value){
    value = value + 10;
    console.log(value)
    //return value;
});

promise01.then((value)=>{
    value = value + 20;
    console.log(value);
    return value;

})




