//normal console
console.log("Inside Global Execution constext");

//variable declaration
var a = 5;

//nested function
function testMe(){
    console.log("Inside testMe Execution context");
    var b = 10;


//inside function create object
    var use = {
        name: "pranti",
        country: "India"
    };


//create another function as a inner function
    function testAgain(){
        console.log("Inside testAgain Execution Context");
        console.log("Exeiting testAfain Execution context");

    }

    
    //call the inner function inside the outer function
    testAgain();
    console.log("Exiting testMe execution context");
}
testMe();