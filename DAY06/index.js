console.log("DAY06");
//function

//define or declare a function
function printThis(){
    console.log("printing....")

}

//call or invoke a function
printThis();

//function as an expression
let printMe = function(){
    console.log("print Me at this time");
}

console.log(printMe);
printMe();//invoke 

function sum(a,b){
    const result = a+b;
    //console.log(result);
    return result
    
} 
let ans = sum(1,2);
console.log(ans*2);
let answer = sum (2,3);
console.log(answer);

//parameter & argument 
function sum(a,b){
    const result = a+b;
    return result;
}

let result = sum(10,9);

function double(x){
    return 2*x;
}


console.log(double(sum(10,2)));

//default parameter
function sum(a=0,b=0){
    return (2*(a+b));
}

let result1 = sum(7,7);
console.log(result1);

//rest parameter

function myFunc(...rest){
    console.log (rest);
}
console.log(myFunc(1,2,3,4,5,6,7,8,9,10));


//nested function
function outer(){
    console.log(" this is outer function")
    

    function inner(){
        console.log("this is inner function");
    }
    
    
}

//outer();

function outerFunc(){
    console.log("yes, this is outer function");
    //return 1+2;
    return function inner(){
        console.log("this is inner");
    }
    
}
//console.log(outerFunc());
//let resu = outerFunc();
//console.log(resu())
outerFunc();

function x(){
    return 1+2;
}
x();

//callback function
function foo(dunc){
    console.log("i am pranti");
    dunc();
    
    
}
foo(function(){
    console.log("Hi")
})

//pure function

function greet(name){
    return "hello "   + name;
}

console.log(greet("pranti"));

//higher order function
function getCamera (camera){
    camera();
}

getCamera(function(){
    console.log("sony");
})

//Example 1: Function that accepts another function as an argument
function operate(num1 , num2 , num3 ){
    return num3(num1 , num2);
}

function add(a,b){
    return  a+b;;
}

let answ = operate(5,2,add);
console.log(answ);

//Example 2: Function that return another function

function multiplier (factor){
    return function(number){
        return number * factor;
    }
    
}

let aquire = multiplier(5);
console.log(multiplier(5));

//Arrow function

let add1 = () => console.log("No parameter");
add1();

//traditional function
function sum1 (a,b){
    return a+b;
}
console.log(sum1(6,100));

//Arrow function

const sum2 = (a,b)=> a+b;
console.log(sum2(19,80));

//with return

const sum3 = (a,b)=>{
    console.log("hello");
    return a+b;
}

console.log(sum3(70,30));

//IIFE(Immediately Invoked Function Expression)
/*function arr(func){
    console.log("Hi pranti");
    func();
}*/
(function(count){
    console.log("IIFE",count);
})(1)

//recursion
function foo(){

    console.log("hi");
}

function fetch(count){
    
    //console.log("Fetching Water ....", count);

    if(count === 0){
        //console.log("No more water is left to fetch...");
        return 9;
    }
   console.log("Fetching Water ....", count);

    return fetch(count - 1);
    //console.log("Fetching Water ....", count);
}

fetch(5);




