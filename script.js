// script.js

// Color options array
const colors = ["#fff9f7", "#fefff7", "#f7fff7"];

// Prompt for user input
const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color:\n0 for grey\n1 for yellow\n2 for green");

// Store input in object
const userInfo = {
  name: userName,
  selectedColor: colors[colorChoice]
};

// Array check for console output
console.log("The first color in the array is:", colors[0]);

// Apply background color from object
if (userInfo.selectedColor) {
  document.body.style.backgroundColor = userInfo.selectedColor;
} else {
  console.warn("Invalid color choice. Background color not applied.");
}
