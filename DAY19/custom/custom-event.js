/*
// step 1: Create a Custom Event

// constructor function
const myEvent = new CustomEvent ("userLoggedIn", {
    detail:{
        username : "tapaScript",
        role : "admin"
    }
})


// Step 2: Listen to the custom Event
document.addEventListener("userLoggedIn", (e)=>{
    console.log(`user login Detected ${e.detail.username}`)

});


// Step 3: Dispatching the custom Event
document.dispatchEvent(myEvent);
*/

function loginUser(username){
    const event = new CustomEvent("userLoggedIn",{
        detail: {username}
    });
    
    document.dispatchEvent(event);

}


document.addEventListener("userLoggedIn",(e)=>{
    const user = e.detail.username;
    document.getElementById("welcome").textContent = `welcome, ${user}`

});