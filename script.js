// script.js

// ➤ Color Options Array
const colors = ["#fff9f7", "#fefff7", "#f7fff7"]; // grey, yellow, green

// ➤ Run after DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  // Create a greeting
  const greeting = document.createElement("p");
  greeting.textContent = "Welcome!";
  greeting.style.textAlign = "center";
  greeting.style.fontWeight = "bold";
  greeting.style.fontSize = "18px";
  document.body.prepend(greeting);

  // ➤ Add a button for user input
  const button = document.createElement("button");
  button.textContent = "Change Background Color";
  button.style.display = "block";
  button.style.margin = "1em auto";
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
  document.body.insertBefore(button, document.body.children[1]);

  // ➤ Handle button click
  button.addEventListener("click", () => {
    // ➤ Prompt for User Input
    const userName = prompt("What is your name?");
    const colorChoice = prompt("Pick a background color: 0 for grey, 1 for yellow, 2 for green");

    // ➤ Store Input in an Object
    const userInfo = {
      name: userName,
      selectedColor: colors[colorChoice]
    };

    // ➤ Array Check (Required)
    console.log("The first color in the array is:", colors[0]);

    // ➤ Apply Color to Background
    if (userInfo.selectedColor) {
      document.body.style.backgroundColor = userInfo.selectedColor;
      greeting.textContent = `Hello, ${userInfo.name || 'guest'}!`;
    } else {
      alert("Invalid color choice. Please enter 0, 1, or 2.");
    }
  });
});
