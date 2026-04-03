const quizData = [
    {

        question: "What does DOM stand for?",
        options: [
            "Document Order Model",
            "Document Object Model",
            "Data Object Method",
            "Direct Object Management"
        ],
        correct: 1
},

{
    question: "Which method selects by ID?",
    options: [
        "getElementById()",
        "querySelectorAll()",
        "getElement()",
        "getelementsByClassName()"
    ] ,
    correct: 0
},

{
    question: "Which event fires on input change?",
    options: ["click","submit","change", "keydown"],
    correct: 2
}
];


let questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft;

const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const nextBtn= document.getElementById("next-btn");
const timerElem = document.getElementById("timer");
const resultElem = document.getElementById("result");
const restartElem  = document.getElementById("restart");

function loading(){
    clearInterval(timer);
    timeLeft = 15;
    updateTimer();
    timer = setInterval(countdown, 1000);


    const q = questions[currentQuestion];
    questionElem.textContent = `Q${currentQuestion + 1}. ${q.question}`;
    optionsElem.innerHTML = "";

    q.options.forEach((option, index) => {
        console.log(option);
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = option;
        btn.addEventListener("click", () => selectAnswer(index, true));
        optionsElem.appendChild(btn);
      


    });

    nextBtn.style.display = "none";
    
}

function countdown(){
    timeLeft--;
    updateTimer();

    if(timeLeft === 0){
        clearInterval(timer);
        selectAnswer(questions[currentQuestion]?.correct , false)
    }

}

function updateTimer(){
    timerElem.textContent = `🕐 ${timeLeft}`;

}

 function selectAnswer(index, shouldScore){
    clearInterval(timer);

    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => btn.disabled = true)
    

    if(index === q.correct){
        shouldScore && score++;
        buttons[index].classList.add("correct");
        
    }else{
        buttons[index].classList.add("wrong");
        buttons[q.correct].classList.add("correct");
    }

    nextBtn.style.display = "inline-block";
        
    }

    nextBtn.addEventListener("click", () => {
        currentQuestion++;

        if(currentQuestion < questions.length){
            loading();
        }else{
            showResult();

        }

    })

    function showResult(){

        nextBtn.style.display= "none";
        const highScore = localStorage.getItem("quizHighScore") || 0;

        const isNew = score > highScore;

        if(isNew){
            localStorage.setItem("quizHighScore", score);
        }
        
        resultElem.innerHTML = `
        <h2> Hurray!!! Quiz Completed</h2>
        <p> You have scored ${score} out of ${questions.length} questions</p>
        <p> Highest Score: ${Math.max(score,highScore)}</p> 
        ${isNew ? "<p>Hey, New High Score!</p>":"" }
        
        `
        restartFunc();
       

       
}

restartElem.style.display = "none";
function restartFunc(){
        const restartButton = document.createElement("button");
        restartButton.style.border = "none";
        restartButton.style.borderRadius = "5px";
        restartButton.style.padding = "10px 20px";
        restartButton.style.backgroundColor = "#444479";
        restartButton.style.color = "white";
        restartButton.style.marginBottom = "5px";
    

        restartButton.innerText = "Restart";
        restartButton.addEventListener("click", () =>{
       /* currentQuestion = 0;
        loading();
         restartElem.style.display = "inline-block";
         */
        location.reload();
       
    });
    restartElem.appendChild(restartButton);
    restartElem.style.display = "inline-block";
} 


 
loading();



