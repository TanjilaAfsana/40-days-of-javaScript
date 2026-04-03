
/*
*The Rock , paper , Scissors Game
*This game will be played between the computer and human . Once Human will select Rock, paper or Scissors and in the next turn the computer will select Rock,paper, or Scissor.
*The Winner will be selected based on these rules:
*-Rock can Break Scissors => Rock wins
*-Paper can wrap Rock => paper wins
*- Scissors can cut paper => Scissors Wins
*Ask the input from user and randomly select a computer slection to continue the game.

*/

//Assumptions:
// 1. we have to prompt the user to get their inputs.
// 2. The Computers seledtion will be random.
// 3. We have to compare user and computers choice
// 4. We need to announce the winner.
// 5. After the Winner announcement , we may want to ask the user to play again or quit from the game.

function rockPaperScissorsGame(){
    console.log("Getting Stared With the Rock,Paper or Scissors Game");

    const userChoicePromt = prompt ("Enter Rock,paper, or Scissors");
   
    let userChoice = userChoicePromt.toLowerCase();

    let computerChoice;
    const randomNumber = Math.floor(Math.random()*3)+1;

   /* switch(randomNumber){
        case 1:
            console.log("rock");
            break;
        case 2:
            console.log("paper");
            break;
        case 3:
            console.log("scissors");
        default:
            console.log("na match");   
    }
*/
    if (randomNumber === 1){
        computerChoice= "rock";
    } else if (randomNumber === 2){
        computerChoice = "paper";
    } else{
        computerChoice = "scissors";

    }


    console.log("user selected", userChoice);
    console.log("Computer selected", computerChoice);

    if (
        (userChoice === "rock" && computerChoice ==="scissors")||
         (userChoice === "paper" && computerChoice ==="rock")||
          (userChoice === "scissors" && computerChoice ==="paper")
    ){
        console.log("you the User WIN, yay!!!! ")
    } else if (userChoice === computerChoice){
        console.log("The Game is a Tie");
    }else if(
        (userChoice === "rock" && computerChoice ==="paper")||
         (userChoice === "paper" && computerChoice ==="scissors")||
          (userChoice === "scissors" && computerChoice ==="rock")
    ){
        console.log("oh ho ....Computer Wins!!!!");
    }else{
        console.log("Please check the input , We didn`t understand it")
    }

    const playAgainPrompt = prompt ("Do you want to play Again?(yes/no)")
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";

    if (playAgain === "yes") {
        rockPaperScissorsGame();
    }else{
        console.log("Thanks for playing ! See you Next Time");
    }




}

//Start This Game
rockPaperScissorsGame();

