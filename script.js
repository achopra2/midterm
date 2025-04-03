// script.js

// Array of color options
const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green

// Prompt user for input
const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

// Store user input in an object
const userInfo = {
  name: userName,
  selectedColor: colors[colorChoice]
};

// Array check (required)
console.log("The first color in the array is:", colors[0]);

// Apply background color
if (userInfo.selectedColor) {
  document.body.style.backgroundColor = userInfo.selectedColor;
} else {
  alert("Invalid color choice. Using default background color.");
}

// Optional: Personal greeting (can be shown somewhere on the page)
window.addEventListener("DOMContentLoaded", () => {
  const greeting = document.createElement("p");
  greeting.textContent = `Hello, ${userInfo.name || 'guest'}!`;
  greeting.style.textAlign = "center";
  greeting.style.fontWeight = "bold";
  document.body.prepend(greeting);
});