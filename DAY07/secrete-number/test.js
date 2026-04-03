function secreteNumberGame() {
    console.log("Getting start the secret game!!!");
    let max = 10;
    let min = 1;

    let computerGuess = Math.floor(Math.random() * 10) + 1;
    let trial = 1;

    let userGuess = parseInt(prompt("Select the number between 1 to 10"));

    while (userGuess !== computerGuess) {
        if (userGuess > computerGuess) {
            alert("😲 Too High!! Try again");
           console.log("😲 Too High!! Try again");
        } else if (userGuess < computerGuess) {
            alert("😞 Too Low !! Try again");
            console.log("😞 Too Low !! Try again");
        } else {
            alert("😕 Check your input, we didn't understand it!!");
        }
        trial++;
        userGuess = parseInt(prompt("Wrong! Try Again"));
    }

    alert("🎉🎯 Congratulation!! You guessed it right in ${trial} trial(s)");
    console.log("🎉🎯 Congratulation!! You guessed it right in ${trial} trial(s)");
    console.log("Trial attempt ",trial);
    console.log("User selected number:", userGuess);
    console.log("Computer selected number:", computerGuess);
}

secreteNumberGame();