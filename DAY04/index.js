console.log("DAY 04");
let catchingBus = false;

if(catchingBus){
    console.log("I will reach home on time");
    
}else{
    console.log("I will be late to reach");

}
let catching = false;
catching ? console.log("I will reacch home on time"): console.log("I am late");

let age = 18;

if (age >= 18){
    console.log("you are elligible for vote");
}else{
    console.log("you are not elligible for vote");

}

//lets building a grading system
let score=65;

if(score >=90){
    console.log("you get A");
}
else if(score >= 80){
    console.log("you get  B");
}
else if(score >= 70){
    console.log("you get  C")
}else{
    console.log("You fail")
}


let x = 0;

if(x===0){
    console.log("0");
}

if(x >= 0){
    console.log("Greater than 0");
}

if(x <= 0) {
    console.log("Less than 0")
}
console.log("Another ");
let y = 0;

if(y===0){
    console.log("0")
}else if(y <= 0){
    console.log("Greater than zero");
    
}else if (y >= 0){
    console.log ("Less than zero");

}

//nested loop
const condition = false;
const innerCondition = true;

if(condition){
    console.log("outer if ")
    if(innerCondition){
        console.log("inner if")
    }else{
        console.log("Inner else")
    }
}else{
    console.log("outer else")
}

// passward checking

let username = "admin";
let password = "123";

if(username === "admin"){
    if(password === "1234"){
        console.log("LogIn successfully")
    }else{
        console.log("Incorrect password")
    }
}else{
    console.log("Username not found")
}

let day = 5;
switch(day){
    case 1:
    console.log("Friday");
    break;
    case 2:
        console.log("saturday");
        break;
    case 3:
        console.log ("sunday");
        break;
    case 4:
        console.log("Monday");
        break;
    case 5:
        console.log("Tuesday");
        break;
    case 6:
        console.log("Wednesday");
        break;
    case 7:
        console.log(Thursday);
        break;
    default:
        console.log("Not found any day");
}

let name = "pranti";
switch(name) {
    case"pranti":
        console.log("yes");
        break;

    case "Google":
        console.log("Giving answer to all searches");
        break;
    default:
        console.log("no found");
}
