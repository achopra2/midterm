// script.js

// ➤ Color Options Array
const colors = ["#808000", "#008000", "#00FF00"]; // olive, green, green

// ➤ Prompt for User Input
const userName = prompt("What is your name?");
const colorChoice = parseInt(prompt("Pick a background color: 0 for olive, 1 for green, 2 for lime"));

// ➤ Validate input and store in object
let userInfo;

if (!isNaN(colorChoice) && colorChoice >= 0 && colorChoice < colors.length) {
  userInfo = {
    name: userName,
    selectedColor: colors[colorChoice]
  };

  // ➤ Array Check (Required)
  console.log("The first color in the array is:", colors[0]);

  // ➤ Apply Color to Background
  document.body.style.backgroundColor = userInfo.selectedColor;

} else {
  alert("Invalid input. Please refresh and enter 0, 1, or 2.");
  userInfo = {
    name: userName,
    selectedColor: null
  };
}

// ➤ Greeting
window.addEventListener("DOMContentLoaded", () => {
  const greeting = document.createElement("p");
  greeting.textContent = `Hello, ${userInfo.name || 'guest'}!`;
  greeting.style.textAlign = "center";
  greeting.style.fontWeight = "bold";
  greeting.style.fontSize = "18px";
  document.body.prepend(greeting);
});

