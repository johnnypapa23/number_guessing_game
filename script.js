// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number (for testing):", randomNumber);

// Select DOM elements
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const result = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

// Function to check the guess
function checkGuess() {
    const userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        result.textContent = "⚠️ Please enter a number between 1 and 100!";
        result.style.color = "orange";
        return;
    }

    if (userGuess === randomNumber) {
        result.textContent = `🎉 Congratulations! ${userGuess} is correct!`;
        result.style.color = "green";
        guessBtn.disabled = true;
        resetBtn.style.display = "block";
    } else if (userGuess < randomNumber) {
        result.textContent = "📉 Too low! Try again.";
        result.style.color = "red";
    } else {
        result.textContent = "📈 Too high! Try again.";
        result.style.color = "red";
    }

    guessInput.value = "";
    guessInput.focus();
}

// Function to reset the game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    result.textContent = "";
    guessBtn.disabled = false;
    resetBtn.style.display = "none";
    guessInput.value = "";
    guessInput.focus();
}

// Event listeners
guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);

// Allow pressing Enter to submit guess
guessInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        checkGuess();
    }
});
