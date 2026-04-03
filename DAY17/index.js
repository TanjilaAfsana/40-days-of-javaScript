console.log("Day 17 - Introduction to DOM");

/*
-what is DOM?
-Understanding DOM Types
-Accessing DOM
-Mini Project
-Tasks
*/

// DOM Types
   // 1. Document - Document represents  entire tree
   console.log(document);

   // 2. Node - any item in the dom tree is called node. Node represents every html elements tree.text node or  non text elements
   //two types of node
   //1.attribute node 2.element node 3.text node

   // 3.Element -A specific type of node that represent HTML tags/elements

   // 4.NodeList - An array of nodes. order list is an array

   // 5. Attr - represents the attribute of a node.
   // <img src="\" alt = "some image" />

   // 6. NameNodeMap - A collection of Attr. it is no order list it is not an array


   // Accessing DOM
   let title = document.getElementById("heading");
   console.log(title);

   // the mejor difference between id and class is id will be unique while class will be repeated


console.log(document);

//By ID
let titleElem = document.getElementById("heading");
console.log(titleElem);

//By Class
let infoElems = document.getElementsByClassName("info");
console.log(infoElems);

//console.log(infoElems[0]);

[...infoElems].forEach((elem)=>{
    console.log(elem);
})

let pTagElems = document.getElementsByTagName("p") ;
console.log(pTagElems);


// Selector - Query Selector and Query Selector All


//Query selector  - querySelector()
let para = document.querySelector("p.info");
console.log("using query selector ", para);

//Query selector All
let paras = document.querySelectorAll("p.info");
console.log("using query selector all", paras);

// DOM  Access Methods:

// 1. getElementById(id)
// 2. getElementsByClassName(className)
// 3. getElementsByTagName(tagName)
// 4. querySlector(cssSelector)
// 5. querySelectorAll(cssSlector)

//Mini Project -1: Highlighter App

function highlightText(){
    console.log("About to highlight a text...");

    let element = document.getElementsByClassName("p.info");
    console.log(element);

    //element.forEach((item) =>{
      // item.style.backgroundColor = "yellow";
   // })

}

