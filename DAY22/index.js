


// Asynchronous

// - Callback

/*
function greet(name,Callback){
    
    console.log("My name is ", name);
    Callback();

}

function sayBye(){
    console.log("Bye");
}

greet("pranti",sayBye);
// - Promises
// - async/await keywords
// - Event Loop


function orderPizza(type,name){
    query(`api/pizzahub/`, function(result,error){
        if(!error){
            let shopId = result[0];
            console.log(shopId);

            // Get the store and query pizzas
            query(`api/pizzahub/pizzas/${shopId}`, function(result,error))
        }
    })
}


orderPizza("veg" ,"Margerita");
*/

/*
const takeOrder = (customer,Callback) =>{
    console.log(`take order for ${customer}`);
    Callback(customer);
}

const processOrder = (customer, Callback)=>{
    console.log(`processing order for ${customer}`);

    setTimeout(() => {
        console.log(`cooking completed`);
        console.log(`order processed for ${customer}`);
        Callback(customer);
    }, 3000);

    

};

const completedOrder = (customer) =>{
    console.log(`completed order for ${customer}`);
}

//console.log("hello");

takeOrder('customer1', (customer) =>{
    processOrder(customer, () =>{
        completedOrder(customer);
    })
});

console.log("hello everyOne");

function sum (a, b){
    return a+b;
}

console.log(sum(5,10));
//processOrder();


// js promise

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10.00 PM'
        };
        resolve(meetingDetails);
    }else{
        reject(new Error('Meeting already scheduled'));
    }

    });


const addToCalender = (meetingDetails) => {

    return new Promise((resolve, reject) => {
         const calender = ` ${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

         resolve(calender);

         // or Promise.resove(calender)
    })
}


meeting
    .then(addToCalender)
    .then((res)=>{
        //resolved data 
        console.log(JSON.stringify(res));
    })

    .catch((err) =>{
        //rejected data
        console.log(err.message)
    });

    console.log("hello")
*/


const promise1 = Promise.resolve(`promise 1 resolved`);

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(`promise 2 resolve`)
    }, 2000);
});

//promise1.then(res => console.log(res));
//promise2.then(res => console.log(res));

Promise.all([promise1, promise2]).then((res)=>{
    console.log(res);
    
});




/*
const step1 = new Promise((resolve,reject) => {
    const num = 20;
    if(num>10){
        console.log(`${num} is greater than 10`);
        resolve("step1 done");
       // resolve();
    }else{
        //console.log(`${num} is less than 10`);
        reject("step1 failsed");
    }
})
function first(prev){
return new Promise((resolve) =>{
    console.log(prev);
    resolve("step2 done");
    

}) 
};

function second(prev){
return new Promise((resolve) =>{
    console.log(prev);
    resolve("step3 done")

})
} ;

step1
.then(first)
.then(second)
.then(final => console.log(final))
.catch(err => console.log("Error:", err));
*/













