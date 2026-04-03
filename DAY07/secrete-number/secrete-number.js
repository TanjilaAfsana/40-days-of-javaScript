/*
* Let us play a number guessing game.
* You will ask user for a number between 1 to 10. 
once user will enter a number, you will tell user if the 
entered number is lower or heigher. 
With this information , user will change the number and
finally guess the right number.
you also need to show the number of attempts
made by users to rach to this right guess.
*/

function secreteNumberGame(){
    console.log("Getting start the secrete game!!!");
    let max =10;
    let min = 1;

    let userGuess =parseInt( prompt("select the number 1 to 10"));
    let computerGuess = Math.floor(Math.random()*10)+1;
    let trial = 1;


    while(userGuess !== computerGuess){
     if(userGuess > computerGuess){
        console.log("😒Too High!! Try again");
    }/*else if (userGuess == computerGuess){
        console.log("🎉🎊Congratulation!! You Guessed it right" );
    }*/ else if (userGuess < computerGuess){
        console.log("😉Too Low !! Try again");
    } else{
        console.log("🫡Check your input,, we didn't understand it!!")
    }
   
    
   // while(userGuess !== computerGuess){
        trial++;
        //userGuess = prompt("Wrong! Try Again");
      

    }

   // console.log("Correct ! you guessed it in ${trial} trial");

    console.log("🎉🎊Congratulation!! You Guessed it right" );
    console.log("user select number ", userGuess);
    console.log("computer select the number", computerGuess);
}
secreteNumberGame();