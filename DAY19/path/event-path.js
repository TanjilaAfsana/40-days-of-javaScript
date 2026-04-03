// In event bubbling,  the event starts from the target element and bubbles up through its ancestors.

// The Flow is : Child -> parent -> Grandparent ->Document

// Bubbling

/*document.getElementById("grandparent").addEventListener('click', function(){
    console.log("grandparent clicked");
});

document.getElementById("child").addEventListener("click",function(){
    console.log("Child Clicked");
})

document.getElementById("parent").addEventListener("click", function(){
    console.log("parent Clicked");
})
*/

// Capturing

// In event capturing , the event flows from the outmost ancestor down to the target element. It happens before the actual target handles the event.

document.getElementById("grandparent").addEventListener("click",
    () => {
        console.log("Captured at Grandparent");
    },
    true// Capture phase
)

document.getElementById("parent").addEventListener("click",
    () => {
        console.log("Captured at parent");
    },
    true// Capture phase
)

document.getElementById("child").addEventListener("click",
    () => {
        console.log("Captured at Child");
    },
    true// Capture phase
)


//  Event delegation - it is a technique where you add a single event listener to a parent element, instead of adding individual event listeners to all its children.


document.getElementById("itemList").addEventListener("click" , (event) => {
    if (event.target.tagName === "LI"){
        console.log(`you clicked on ${event.target.innerText}`)
    }
} )


document.getElementById("father").addEventListener("click", ()=>{
 
    console.log("parent clicked");
})

/*document.getElementById("son").addEventListener("click", (e) => {
    console.log("child clicked");
})
    */


// stopPropagation

document.getElementById("son").addEventListener("click", (e) => {
  //e.stopPropagation();
    console.log("child clicked");
})




// Event Default


