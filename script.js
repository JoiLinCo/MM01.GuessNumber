const correctNumber = (Math.floor(Math.random() * 99) + 2);
let guesses = 10;

function submit() {

    let guessNumber = document.getElementById("guess").value;
    let guessFeedback;

    if (guessNumber < correctNumber) {
        guessFeedback = "Too low. Try again.";
    } else if (guessNumber > correctNumber) {
        guessFeedback = "Too high. Try again.";
    } else if (guessNumber == correctNumber) {
        guessFeedback = "Congratulations!";
    } else {
        guessFeedback = "Try again.";
    }
    
    
    document.getElementById("feedback").innerHTML = guessFeedback;

}