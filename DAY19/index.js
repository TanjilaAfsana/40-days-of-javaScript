// What will we learn today?
// what is an event?
// Event handling and why?
// Event handling in markup
// Event Handling in script
// addEventListener and removeEventListener
// DOM content loaded
// Event object
// Evnet capturing and bubbling
// Event Delagation
// Event Default Behaviour
// custom Events
// project(s)
// Tasks


//What is an Event (Browser)

// An event is just a signal that something happened in the browser.


function handleClick(greeting){
    console.log(`Button Clicked with a ${greeting}`);
}

// Event Handling in Script

const mybtn2Elem = document.getElementById("myBtn2");
mybtn2Elem.onclick = function(){
    console.log("My button 2 Clicked");
}

//const mybtn2Elem = document.getElementById("myBtn2");
mybtn2Elem.onclick = function(){
    console.log("My button 2 Clicked Again");
}
//it give only leatest event:My button 2 Clicked Again not previous


mybtn2Elem.onclick = () =>handleClick("Hola");



// addEventListener and removeEventListener

const countBtnElem = document.getElementById("countBtn");

let counter = 0;

const handleCount = function() {
    console.log(counter);
    counter++;
}


const greetMe = function(){
    console.log("Thank You!");
}

/*countBtnElem.addEventListener("click", function(){
    console.log("counter",counter);
    counter++;
});
*/

countBtnElem.addEventListener("click",handleCount);
countBtnElem.addEventListener("click",greetMe);

countBtnElem.removeEventListener("click", handleCount);


const para = document.getElementById("paragraph");
const show = document.getElementById("show");
const hide = document.getElementById("hide");

function shown(){
    para.classList.add("show");
    para.classList.remove("hide")

}

show.addEventListener("click",shown);


function hidden(){
    para.classList.add("hide");
    para.classList.remove("show");

}

hide.addEventListener("click",hidden);


//DOM Content Loaded
document.addEventListener("DOMContentLoaded",function(){
    console.log("DOM content Loaded");
})


// Event Object

const searchElem = document.getElementById("search-id");

function handleChange(event){
         console.log(event);

         console.log("Event Type:", event.type);

         console.log("Target:", event.target);
         console.log("Target Name:", event.target.name)
         console.log("Target Value:", event.target.value);
         console.log("Event Type:", event.type);
         console.log("Current Target:", event.currentTarget);

         console.log(this);
        
         

}

searchElem.addEventListener("change",handleChange)

