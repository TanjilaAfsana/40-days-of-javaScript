console.log("Day 20- DOM: Advanced Tips");

// Efficient DOM traversal
const parent = document.querySelector(".card");
const firstChild = parent.firstElementChild;
const next = firstChild.nextElementSibling;
const lastChild = parent.lastElementChild;
const parentElement = firstChild.parentElement;



// Templates and Cloning

const template = document.getElementById("card-template");
const clone = template.content.cloneNode(true);
clone.querySelector(".title").textContent = "DOM Advanced topic";
clone.querySelector(".desc").textContent = "Hope you are learning something New";

document.body.appendChild(clone);


// Document Fragment and Range

// Document Fragment 
// - Not part of the main DOM tree untill you insert it
// - Acts like a temp container
// - Great for building Chunks of DOM before adding them.

const fragment = document.createDocumentFragment();
for (let i = 0; i<=3; i++){
    const li = document.createElement("Li");
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

document.getElementById('List').appendChild(fragment);


// Range

const p = document.getElementById("para");
const range = document.createRange();

range.setStart(p.firstChild, 6); // After "Hello"
range.setEnd(p.childNodes[2], 4);

const content = range.cloneContents();
console.log(content);

// shadow DOM


// Advanced Class Manipulation

const btn = document.querySelector('.btn');
btn.classList.add('active');
btn.classList.remove('desabled');
btn.classList.toggle('visible');
btn.classList.replace('error', 'success');

// Handling Large-Scale DOM Updates

function addItems(count){
    const frag = document.createDocumentFragment();
    for(let i = 0; i< count; i++) {
        const div = document.createElement('div');
        div.textContent = `Item ${i}`;
        frag.appendChild(div);
    }

    document.body.appendChild(frag);
}

addItems(100);


// Mutation Observer


// Mutation observer is an built-in javaScript API that lets you observe change  to a DOM element
// or a sub tree and then help you to ract to it  via a callback function.
// it is use when you detact some changes on your dom like  someThing added, delete, some attribute value got change etc 


//const observer = new MutationObserver(callback);
//observer.observe(targetNode, config);

const target = document.getElementById("watchMe");


const observer = new MutationObserver((mutationList, observer) => {

    for (const mutation of mutationList){
        console.log(`Type of mutation: ${mutation.type}`);

        if (mutation.type === 'childList'){
            console.log(`A child node was added or removed.`);
        }


        if (mutation.type === 'attributes'){
            console.log(`Attribute ${mutation.attributeName} was changed.`);
        }

        if (mutation.type === 'characterData'){
            console.log(`Text content changed to : ${mutation.target.data} was changed.`);
        }
    }

}) ;

const config = {
    subtree: true,
    characterData: true,
    childList: true,
    attributes: true

}

observer.observe(target,config);

function ChangeDOM(){
    target.textContent = "GoodBye";
    target.setAttribute("data-status", "changed");

}

