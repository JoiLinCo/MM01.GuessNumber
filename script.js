const correctNumber = (Math.floor(Math.random() * 99) + 2);

function submit() {

    let guessNumber = document.getElementById("guess").value;
    let guessFeedback;

    if (guessNumber < correctNumber) {
        guessFeedback = "Too low. Try again.";
    } else if (guessNumber > correctNumber) {
        guessFeedback = "Too high. Try again.";
    } else if (guessNumber === correctNumber) {
        guessFeedback = "Congratulations";
    }

    document.getElementById("feedback").innerHTML = guessFeedback;

}