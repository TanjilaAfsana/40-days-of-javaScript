//arr.some(testFunc())

//customer object 
let customers = [
    {
        "id":1,
        "f_name": "Abby",
        "l_name": "Thomas",
        "gender": "M",
        "married": true,
        "age":32,
        "expense": 500,
        "purchased":["shampo",'toys','Book']
    },

     {
        "id":2,
        "f_name": "jerry",
        "l_name": "Tom",
        "gender": "M",
        "married": true,
        "age":64,
        "expense": 100,
        "purchased":["Stick"]
    },

     {
        "id":3,
        "f_name": "Abby",
        "l_name": "Cherry",
        "gender": "f",
        "married": true,
        "age":22,
        "expense": 1500,
        "purchased":["Lipstik",'Nail Polish','Book']
    },

     {
        "id":4,
        "f_name": "Dev",
        "l_name": "Currian",
        "gender": "M",
        "married": true,
        "age":2,
        "expense": 90,
        "purchased":['Book']
    },

     {
        "id":5,
        "f_name": "Maria",
        "l_name": "Gomes",
        "gender": "F",
        "married": false,
        "age":7,
        "expense": 300,
        "purchased":['toys',]
    }
]


//arr.some((testFunc))

const hasYoungCustomer = customers.some((customer)=> {
    return customer.age < 10;

})

console.log(hasYoungCustomer);


const numbers = [1,2,3,4,5];
const hasEven = numbers.some(num => num % 2 === 0)
console.log(hasEven);

const fruits = ['apple','banana','mango'];
const longwordExists = fruits.some((fruit,index) =>{
    console.log(`checking index ${index}`);
    return fruit.length>5;

})
console.log(longwordExists)




//challenge 1: has negative number?
//write a function hasNegativeNumber(arr) that return true
// if the array contains any negative number, otherwise return false
const arr = [1,-1,3,4];
const hasNegativeNumber = arr.some(num=> num<= 0)
console.log('The condition is :',hasNegativeNumber);


//2. contains zero
const number = [1,2,5,9];
const containsZero = number.some(num=> num ===0)
console.log("The array contain zero:", containsZero);

//3.contains long string

const words = ['hello','world','javaScript'];
const hasLongString = words.some((word,index) =>{
    return word.length>=10
})
console.log(hasLongString);

//arr.find() method

const youngCustomer = customers.findIndex((customer)=>{
    return customer.age < 10;

})

console.log("the result is :",youngCustomer);

//arr.every() method

const isThereAWindowShopper = customers.every((customer)=>{
    return customer?.purchased?.length ===0;

})
console.log("is there  a window shopper?:",isThereAWindowShopper);


// arr.flatMap()method

const num = [10,20,30];
console.log(num.map(item => [item*2]));
console.log(num.flatMap(item => [item*2]));

