// Common Mistake Developers Make With Async Programming in JavaScript



// - 1. Looping with Promises

const ids = ["1", "2", "3", "4"];

const fetchData = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

   
}

const loopFetches = () => {
    for (let i=0; i< ids.length; i++){

        console.log(`*** Fetching details of ${ids[i]} ***`);

        const response = fetchData(ids[i]);


        response
        .then ((response)=>{
           return response.json();

        })
        .then((data)=>{
            console.log(

                `
                Id: ${data?.id}
                Name: ${data.name}
                Company: ${data?.company?.name}
                Address: ${data?.address?.city}
                `
                
                )});
        }
    }

    


//loopFetches();


const loopFetchesAsync = async () =>{

    for(let i=0; i < ids.length; i++){

        console.log(`=== Fetching details of ${ids[i]} ===`);
        const response = await fetchData(ids[i]);
        constdata = await response.json();

        console.log(

                `
                Id: ${data?.id}
                Name: ${data.name}
                Company: ${data?.company?.name}
                Address: ${data?.address?.city}
                `
                
                );
    }

}

//loopFetchesAsync();

const loopAll = async () =>{
    const response = await Promise.allSettled(ids.map((id) => fetchData(id)));

    const data = await Promise.allSettled(
        response.map((response)=>  response.value.json())

    )

    console.log(response);
    console.log(data);

    data.map((userInfo) => {
        const user = userInfo.value;
        console.log(`*** Fetching details of ${user?.id}`);
        console.log(

                `
                Id: ${user?.id}
                Name: ${user.name}
                Company: ${user?.company?.name}
                Address: ${user?.address?.city}
                `
                
                );
    })
}

(loopAll());

//-------------------------------------------------------

// 2- Promise Chain vs No Chain

const ten = new Promise((resolve, reject)=> {
    resolve(10);
});


//chain
ten
.then((result) => {
    // returns 20
    return result + 10;
})
.then((result) => {
    //return 200
    return result * 10;
})
.then((result) => {
    //returns 190
    return result - 10;
    
})
.then((result) => {
    console.log(result);
})


// No Chain 

ten. then((result)=>{
    // reeturn 20
    return result + 10;
});

ten.then((result)=>{
    //return 100
    return result * 10;
});

ten.then((result) =>{
    //return 0
    return result -10
});

ten.then((result) =>{
    //logs 10 in the console.
    console.log(result);
});




//------------------------------------------------------------


// 3- (Not) Handling Errors with Promises

const oddEven = (num) => {
    return new Promise((resolve, reject) => {
        if(num % 2 ===0){
            resolve("Even");
        }else {
            reject (new Error("Odd"));
        }
    });
}

oddEven(11)
.then((result) => {
    console.log(result);
})
.catch((error)=> {
    console.error(error.message)
})



//-------------------------------------------------------

// 4- Missing a function in .then() handler   

// you miss using the parameter as a .then  ,,,, .then method takes two callback function,,, 1.to handle resolve case 2. to handle reject case .. but if you are missing using a callback function in .then handler and instead of that use just a value it not going to give us the aspected output


const hello = Promise.resolve("Hello");

hello.then('World').then (result => console.log(result));

// first .then method doesn't use a callback function.so it means the previous result is jsut false throw

//using callback function

hello
.then(()=> "world"
)
.then((result)=>{
    console.log(result);
})



// - 5: Using Promises for synchronous Operations


const cache = {
    "tapas@email.com": {
        name : "Tapas Adhikary",
        org: "tapaScript"
    }
};

const getDataV1 = (email) => {
     const userFromCache = cache[email];

            if (userFromCache){
                // Make the call to fetch user data
                // Update cache
                console.log(`User details ${JSON.stringify(userFromCache)}`);

            }
    // return new Promise((resolve, reject) => {
       
           /*  const userFromCache = cache[email];

            if (!userFromCache){
                // Make the call to fetch user data
                // Update cache
                console.log("Make the call and update cache");

            } */ else {
                return new Promise((resolve, reject) => {
                setTimeout(() => {

                console.log("Make the call and update cache");
            
            },2000)
        })
    
    
}
}

getDataV1("tapas@email.com");


// -6: Using unnecessary try-catch with Promises

// Redundant try- catch

/* new Promise ((resolve, reject)=> {
    try {
        const value = getValue();
        // do something with value
        resolve(value);
    }catch(e){
        reject(e);
    }
})
.then(result => console.log (result))
.catch(error => console.log(error));

 */

new Promise ((resolve, reject)=> {
    
        const value = getValue();
        // do something with value
        resolve(value);
   
})
.then(result => console.log (result))
.catch(error => console.log(error)); // try catch only use async await 


