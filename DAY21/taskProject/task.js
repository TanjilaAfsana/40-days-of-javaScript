// Assignment: Recipe Finder App

/*

Build a Recipe Finder web app using javaScript DOM skills to display recipes based on a search keyword.

This project will NOT use any external API- WE'll use dummy data.


## TODO

Use javaScript DOM to :

- Display a list of recipes dynamically.
- Filter recipes by title based on users search input.
-No frameworks( no react, Vue, etc.)
-Use only HTML, CSS and Vanilla javaScript.
- Dummy Data is Provided - store it inside your javaScript file


### Dummy Data

#### Expectations

- A search bar at the top.
- As the user types, filter recipes by title (case insensitive).
- If no recipe found , show a "no recipes found " message.
- Clicking on a recipe title should expand/ collapse to show ingredients and instructions.
- Add a clear button to reset the search.
- Add smooth slide animation when expanding /collapsing recipe details.
- Save last search tern in localStorage and prefill the input when the page reloads.



*/

const recipes = [
    {
        title: "Spaghetti Carbonara",
        ingredients : ["Spaghetti", "Egg", "Parmesan Cheese", "Bacon"],
        instructions: "Cook Pasta. Mix with Eggs and Cheese. Add Bacon."
    },
    {
        title: "Chicken Curry",
        ingredients: ["Chicken", "Curry powder", "Onions", "Tomatoes"],
        instructions: "Cook onions, add chicken, spices, and tomatoes."
    },

    {
        title: "Grilled  Cheese Sandwich",
        ingredients: ["Bread", "Cheddar Cheese", "Butter"],
        instructions: "Butter bread, place cheese between slices, and grill."
    },

    {
        title: "Veggie Stir Fry",
        ingredients: ["Broccoli", "Carrots", "Bell Pappers", "Soy Sauce"],
        instructions: "Stir fry vegetables and add soy sauce."
    }
];

const copyRecipe = [...recipes].sort(()=> Math.random()-.5);

let currentIndex = 0;


const mainDiv = document.getElementById("recipe");
const btn = document.getElementById("btn");
const reset = document.getElementById("reset");

reset.style.display = "none";



    btn.addEventListener("click", ()=>{

    const titleDiv = document.createElement("div");
    const search = document.getElementById("input-search");
    const text = search.value.trim().toLowerCase();

    
    const foundRecipe = copyRecipe.filter(recipe => recipe.title.toLowerCase() === text);

    if ( foundRecipe.length >0){
       foundRecipe.forEach(recipe => {
        //const titleDiv = document.createElement("div");
         titleDiv.innerHTML= `
            <h2> Title: ${copyRecipe[currentIndex].title}</h2>
        `;

        titleDiv.classList.add("titleClass");

        titleDiv.addEventListener("click", ()=> {

            const detailsDiv = document.createElement("div");
            detailsDiv.innerHTML= `

            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>

         `
         detailsDiv.classList.add("detailsClass");
         titleDiv.appendChild(detailsDiv);

        })
       })
        
    }
    else{
        titleDiv.innerHTML = `<h3>Any recipe not Found </h3>`;
        titleDiv.classList.add("titleClass");
    }

    mainDiv.appendChild(titleDiv);
    search.value = "";

    reset.style.display = "inline-block";

    })

