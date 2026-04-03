const paraChange = document.getElementById("change");

//problem:1
paraChange.innerText = "lorem20";

console.log("hi");

//problem:2
paraChange.classList.add("red");
console.log(paraChange.classList.contains("red"));
paraChange.classList.toggle("red");

//problem:3
const addFruits = document.createElement("li");
addFruits.innerText = "Jack-Fruits";

const list = document.getElementById("fruits");
list.appendChild(addFruits);

//problem:4
const classRemove = document.getElementById("tag");
classRemove.classList.remove("red");

//problem:5
const removeMe = document.getElementById("removeMe");
removeMe.remove();

// challenge1
const quote = document.getElementById("quote");
quote.innerText = "ami DOM shikhtechi";
 
//challenge 2
const item2 = document.createElement("li");
item2.innerText = "New Item";
const getUl = document.getElementById("list");
getUl.appendChild(item2);

//challenge3
const color = document.getElementById("title");

color.classList.add("blue");

//<h2 id="title">change the color</h2>
const newElem = document.createElement("h1");
newElem.innerText = "welcome to my dom before method class";
const title = document.getElementById("title");
document.body.insertBefore(newElem, title);


//Modifying
const modifying = document.getElementById("title");
modifying.innerHTML = "Yes you <u> change </u> the color";

const divElem = document.querySelector("div");
console.log("inner Text", divElem.innerText);
console.log("Text content", divElem.textContent);

//Remove the item
const removeFruits = document.getElementById("fruits");
const itemToRemove = removeFruits.children[0];
removeFruits.removeChild(itemToRemove);
console.log(removeFruits.children);
//removeFruits.innerText = "";

removeFruits.replaceChildren();//remove all the item
//removeFruits.replaceChildren(param1,param2);//add parameter

//read,write and remove Attributes

/*const image = document.querySelector("img");
console.log(image.getAttribute('alt'));

image.setAttribute("src", "images.png");
image.setAttribute("alt", "image");

//image.removeAttribute("height");

console.log(image.hasAttribute("src"));
//console.log(hasAttribute("height"));

//Taversing/Navigation DOM
  
  //ParentElement and // ParentNode

const span = document.getElementById("text");

console.log("parent Element", span.parentElement.parentElement);
console.log("parent Node", span.parentNode);*/


// Children and childNodes

const mainElem = document.getElementById("main_id");

console.log("Children ", mainElem.children);
console.log("ChiledNodes", mainElem.childNodes);

console.log("First Child", mainElem.firstChild);
console.log("First Child Element", mainElem.firstElementChild);

console.log("Last Child", mainElem.lastChild);
console.log("Last Child Element", mainElem.lastElementChild);



// sibling Travers

 //nextSibling
 //nextElementSibling
 //previousSibling
 //previousElementSibling


//Style Manipulating

const pElem = document.getElementById('p_id');
console.log(pElem.style);
pElem.style.backgroundColor = "skyblue";

// Manipulating Class

const mainDivElement = document.getEelementById("main_div");







