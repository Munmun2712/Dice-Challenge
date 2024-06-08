// Generate a random number between 1 and 6 for both players
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select the <img> elements for both players
var leftDiceImage = document.getElementById("leftDice");
var rightDiceImage = document.getElementById("img2");

// Set the source of the images to the corresponding dice images
leftDiceImage.setAttribute("src", "images/dice" + randomNumber1 + ".png");
rightDiceImage.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Log the result to the console to test it
console.log("Player 1 Dice: " + leftDiceImage.src);
console.log("Player 2 Dice: " + rightDiceImage.src);

// Select the <h1> element
var heading = document.querySelector("h1");

// Update the <h1> text based on the dice values
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 Wins!";
} else {
  heading.innerHTML = "It's a Draw!";
}

// Log the result to the console to test it
console.log("Player 1: " + randomNumber1);
console.log("Player 2: " + randomNumber2);
console.log("Result: " + heading.innerHTML);
