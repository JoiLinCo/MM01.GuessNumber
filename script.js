let correctNumber = (Math.floor(Math.random() * 99) + 2);
let guesses = 10;

/*const button = document.getElementById("submit");
let isGameOver = false;

function newButtonAndFunction() {
    if (button.textContent === "Submit Guess") {
        button.textContent = "Play again";
        button.onclick = newGame();
    } else {
        button.textContent = "Submit Guess";
        button.onclick = submit()
    }
}

function newGame() {
    correctNumber = (Math.floor(Math.random() * 99) + 2);
    guesses = 10;
    newButtonAndFunction();
}
*/

function submit() {

    let guessNumber = document.getElementById("guess").value;
    let guessFeedback;
    let guessCount = guesses;

    if (guessCount === 0) {
        guessFeedback = "You are out of guesses. Would you like to play again?";
    } else if (guessNumber === "") {
        guessFeedback = "Please enter an integer.";
    } else if (guessNumber == correctNumber) {
        var element = document.getElementById("feedback");
        element.classList.remove("feedback");
        element.classList.add("correct");
        guessFeedback = "Congratulations!";
    } else if (guessNumber < correctNumber) {
        guessFeedback = "Too low. Try again. You have " + guesses + " guesses remaining.";
        guesses--;
    } else if (guessNumber > correctNumber) {
        guessFeedback = "Too high. Try again. You have " +guesses+ " guesses remaining.";
        guesses--;
    } else {
        guessFeedback = "Try again.";
    }
    
    document.getElementById("feedback").innerHTML = guessFeedback;

}


