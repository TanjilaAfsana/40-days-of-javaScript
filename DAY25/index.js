

// - 1. What is fetch() API and Syntax
// - 2. Using Async/Await with fetch()
// - 2. HTTP Methods
// - 3. fetch() Usage: Getting Resources
// - 4. fetch() Usage: Query Params
// - 5. fetch() Usage: Creating Resource
// - 6. fetch() Usage: Custom Headers
// - 7. fetch() Usage: Updating an Entire Resource
// - 8. fetch() Usage: Updating a Part of the Resource
// - 9. fetch() Usage: Deleting Resource
// - 10. Creating a Request Object
// - 11. Handling Response
// - 12. Handling Errors
// - 13. Canceling a Request
// - 14. Tasks and Assignments

// - 1. what is fetch() API and Syntax


/*fetch(URL, options) // it return a Promise
    .then(Response => Response.json()) // response object is data ,,, many details data
    .then(data => console.log(data))
    .catch(error => console.log(error))

   */ 
//-----------------------------------------------------------------------------------------------


// - 2. Using async/await with fetch()

async function fetchData(url){

    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

//fetchData('http://localhost:3000/pizzas');

//---------------------------------------

// - 4. fetch() Usage: Getting Resources

async function fetchPost() {
    const API_URL = "http://localhost:3000/posts";

    try{

        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);

    } catch(error){
        console.error(error);

    }
    
}

//fetchPost();


//------------------------------------------------


// - 5. fetch() Usage: Query params ------------------->
//-------
//  url er sathe extra kichu add korar jonno like http://localhost:3000/posts?_embed=comments,,,, '?' ei sign er por theke extra kichu add hoiche bujhay.

//------------------*/

async function  fetchPostWithComments() {

    const API_URL = "http://localhost:3000/posts";

    const queryParams = {                        //Query params → extra instruction server ke, ki data chao
        _embed: "comments"  //_embed=comments → bole, prottek post er object er bhitore tar related comments include koro
    };

    try {

        const queryString =  new URLSearchParams(queryParams).toString();
        
        const url = `${API_URL}?${queryString}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        console.log(queryString);

    }catch(error){
        console.error(error)

    }
    
}

//fetchPostWithComments();

//-----------------------------------------------------------

// - 6. fetch() Usage: Creating Resouce
const button = document.getElementById('button');

async function createPost(postData) {
    const API_URL = "http://localhost:3000/posts";

    try {

       const response =  await fetch(API_URL, { 

            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postData)
            
            // options-> object

        });

        if(!response.ok) throw new Error("Not found");
        const result = await response.json();
        console.log(result);
 
    } catch (error) {
        console.log(error);
    }
    
}


const newPostData = {
    id: crypto.randomUUID() ,
    title: "How to use fetch() API for POST",
    views: 0
}

button.addEventListener('click', ()=>{
   //createPost(newPostData);
    
})

//--------------------------------------------------------------

// - 8. fetch() Usage: Updating an Entire Resource

const button2= document.getElementById('button2');
async function  updatePost(postData) {

    console.log("Replacing a View Data...");
    const API_URL = "http://localhost:3000/posts/a9057951515e-3da2-9793-af29719d0e33";

    try{

        const response = await fetch(API_URL, {
            method: "PUT",// or 'PATCH'
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(postData)
        });

        const result = await response.json();
        console.log(result)

    } catch(error) {
        console.log(error);

    }
    
}

const updatePostData = {
    title: "What is 40 Days of JavaScript2",//PATCH->title or views
    views: 160
};

button2.addEventListener('click', ()=>{
   //updatePost(updatePostData)
    
});

console.log(updatePostData);


//-----------------------------------------------------------

// - 10. fetch() Usage: Deleting Resource

const button3 = document.getElementById('button3');

async function deletePost(postId) {

    const API_URL = `http://localhost:3000/posts/${postId}`;

    try {
        const respose = await fetch(API_URL, {
            method: "DELETE"
        });

        const result = await respose.json();
        console.log(result);

    } catch(error) {
        console.log(error);
    }
    
}

button3.addEventListener('click', ()=>{
  // deletePost("12345");
    
});


// ----------------------------------------------------------

// 7. fetch() Usage: Custom headers

async function  loging() {

    const API_URL = "http://localhost:3000/login";

    try{

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization : "Bearer secret-token",
                "Custom-Header" : "learn 40 days of js"
            },
            body : JSON.stringify({username: "tapascript", password: "hello"}),
        });

        const result = await response.json();
        console.log(result);


    } catch(error) {
        console.log(error)
    }
    
    
}

//loging();

//---------------------------------------------------------
// - 11. Creating a Request Object

const Request1 = new Request('http://localhost:3000/posts',{
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },

    body: JSON.stringify({
        id: crypto.randomUUID(),
        title: "How to Cancel a Requst?",
        views: 0,
    }),
})

const request2 = new Request(Request1, {
    body: JSON.stringify({
        id: crypto.randomUUID(),
        title: "How to parse JSON",
        views: 10
    }),
})

const button4 = document.getElementById('button4');
async function post(request) {
    try {

        const response = await fetch(request);
        console.log("response",response);

        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        const contentType = response.headers.get("Content-type");
        console.log("content type:", contentType);

        if(! contentType || !contentType.includes("application/json")) {
            throw new TypeError("Oops, we haven't got JSON");
        }

        const result = await response.json();

        console.log("Success:", result);


    } catch(error) {
        console.log("Error:", error);
    }
}


button4.addEventListener('click', ()=>{
    //post(request2);

})


//-------------------------------------------------------

// - 14. Canceling a Request


let controller;

const downloadBtn = document.querySelector('#download-btn');
const abortBtn = document.getElementById("abort-btn");

downloadBtn.addEventListener('click', downloadFile);

abortBtn.addEventListener('click', ()=>{

    console.log("hey")

    if (controller) {
        controller.abort("User Aborted the Download Action");
        console.warn('Download Aborted');
    }

    
})

const url = './download/file.txt';

async function downloadFile() {

    controller = new AbortController();
    const signal = controller.signal;

    try {

        console.log("Downloading...");

    

        const response = await fetch(url,{signal});
        console.log("Download Complete");

        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = objectUrl;
        link.download = "file.txt";
        link.click();

        
            URL.revokeObjectURL(objectUrl);

    
        
      

        


    } catch(error) {


    }
    
}
    

