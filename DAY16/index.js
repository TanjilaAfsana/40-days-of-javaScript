/*console.log("welcome")

 function newFunc(a,b){
    return a+b;
 }
 console.log(newFunc);

 console.log("Value of y is:", y);
let y = 5;
let name = "Maya";
console.log("Name is:", name);
*/

"use strict";

function sum(numOne,numTwo){
    let res = Number(numOne)+Number(numTwo);
    console.log("sum funcction 1");
    showing(res);
  
    console.log("sum funcction 2");
    console.log("sum funcction 3");    

}

function showing(txt){
    alert(txt);
}

let firstNum = prompt ("Enter a number:",'');
let secondNum = prompt ("Enter a another number:",'');

sum(firstNum,secondNum);

