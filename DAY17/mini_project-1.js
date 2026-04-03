function filterList(){
   const inputElem = document.getElementById("searchInput");
   //console.log(inputElem.value);
   const input = inputElem.value;

   const items = document.querySelectorAll("ul#itemList li");
  //console.log(items);

   items.forEach((item) => {
   item.style.backgroundColor = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "green" : "skyblue";
   });
   




}

//filterList();




/*
    <div id="text">This is a test. This test is only a test.</div>
 Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

//Hints:

//Use document.querySelector() or getElementById() to select the paragraph.
//Convert the text into an array of words.
//Use querySelector() to display the most frequent word along with the count inside another <div>.

*/

const textId = document.querySelector("#text");
console.log(textId);

const rawText = textId.innerText.toLowerCase();
console.log(rawText);

const cleanText = rawText.replace(/[.,!?]/g, "");
console.log(cleanText);

const arrayOfWord = cleanText.split(" ");
console.log(arrayOfWord);


// Create an object to store word counts
const wordCounts = {};

// count each word
for (let word of arrayOfWord){
    if(wordCounts[word]){
        wordCounts[word]++;
    }else{
        wordCounts[word] = 1;
    }
}
console.log(wordCounts);

// find max value
let maxKey = null;
let maxValue = -Infinity;
for (let key in wordCounts){
    if (wordCounts[key] > maxValue){
        maxValue = wordCounts[key];
        maxKey = key;
    }
}

console.log(maxValue);
console.log(maxKey);

// display the value
let outputElem = document.querySelector("#output");
outputElem.innerHTML = `Most frequent word : "${maxKey}" (Appears ${maxValue} times) `;



//new task:
/*  Create a zebra pattern
Consider the following HTML:

<ul id="cars">
    <li>BMW</li>
    <li>Mahindra</li>
    <li>Audi</li>
    <li>Toyota</li>
    <li>Honda</li>
    <li>Hundai</li>
    <li>Tata</li>
    <li>Suzuki</li>
</ul>
Now put alternate colors and background colors to each of the list tags. for example,

If tne BMW is in white color text, the background should be in black color.
Then for the next car it will be reversed, the color is black and the background is white.
Then again the next one is white color and background black
So on.*/

const selectCars = document.querySelectorAll("ul#cars li");
console.log(selectCars);

const convertToArray = Array.from(selectCars);
console.log(convertToArray);

for ( let i = 0; i<convertToArray.length ; i++){
    if(i % 2 ===0){
     convertToArray[i].style.backgroundColor = "black";
     convertToArray[i].style.color = "white";
    }else{
        convertToArray[i].style.backgroundColor = "white";
        convertToArray[i].style.color = "black";
    }
}

