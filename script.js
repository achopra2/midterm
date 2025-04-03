// script.js

// Array of color options
const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green

// Run this after the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  // Add a greeting to the top of the page
  const greeting = document.createElement("p");
  greeting.textContent = "Welcome!";
  greeting.style.textAlign = "center";
  greeting.style.fontWeight = "bold";
  greeting.style.fontSize = "18px";
  document.body.prepend(greeting);

  // Create a button for background color change
  const button = document.createElement("button");
  button.textContent = "Change Background Color";
  button.style.display = "block";
  button.style.margin = "1em auto";
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";

  // Insert the button below the greeting
  document.body.insertBefore(button, document.body.children[1]);

  // On button click, prompt for user input and change background
  button.addEventListener("click", () => {
    const userName = prompt("What is your name?");
    const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

    const userInfo = {
      name: userName,
      selectedColor: colors[colorChoice]
    };

    // Check array output (required)
    console.log("The first color in the array is:", colors[0]);

    // Apply background color if valid
    if (userInfo.selectedColor) {
      document.body.style.backgroundColor = userInfo.selectedColor;
      greeting.textContent = `Hello, ${userInfo.name || 'guest'}!`;
    } else {
      alert("Invalid color choice. Please enter 0, 1, or 2.");
    }
  });
});
