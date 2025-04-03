// script.js

// ➤ Color Options Array
const colors = ["##708090", "##FFFF00", "##00FF00"]; // grey, yellow, green

// ➤ Prompt for User Input (Assignment Requirement)
const userName = prompt("What is your name?");
const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

// ➤ Store Input in an Object (Assignment Requirement)
const userInfo = {
  name: userName,
  selectedColor: colors[colorChoice]
};

// ➤ Array Check (Required)
console.log("The first color in the array is:", colors[0]);

// ➤ Apply Color to Background (Student must complete)
document.body.style.backgroundColor = userInfo.selectedColor;

window.addEventListener("DOMContentLoaded", () => {
  // Greeting message
  const greeting = document.createElement("p");
  greeting.textContent = `Hello, ${userInfo.name || 'guest'}!`;
  greeting.style.textAlign = "center";
  greeting.style.fontWeight = "bold";
  greeting.style.fontSize = "18px";
  document.body.prepend(greeting);

  // ➤ Create the button
  const button = document.createElement("button");
  button.textContent = "Change Background Color";
  button.style.display = "block";
  button.style.margin = "1em auto";
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
  document.body.insertBefore(button, document.body.children[1]);

  // ➤ Handle button click to change background color again
  button.addEventListener("click", () => {
    const newColorChoice = parseInt(prompt("Pick a new background color: 0 for grey, 1 for yellow, 2 for green"));

    if (!isNaN(newColorChoice) && newColorChoice >= 0 && newColorChoice < colors.length) {
      document.body.style.backgroundColor = colors[newColorChoice];
    } else {
      alert("Invalid input. Please enter 0, 1, or 2.");
    }
  });
});
