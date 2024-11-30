// Select the input display and all buttons
const display = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

// Initialize the current calculation as an empty string
let currentCalculation = "";

// Function to update the display
function updateDisplay(value) {
  display.value = value; // Default to "0" if the display is empty
}

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim(); // Get the button's text content

    switch (value) {
      case "AC":
        currentCalculation = ""; // Clear the current calculation
        break;

      case "=":
        try {
          // Evaluate the current calculation safely
          currentCalculation = eval(currentCalculation).toString();
        } catch (error) {
          currentCalculation = "Error"; // Handle invalid input
        }
        break;
      case "%":
        try {
          currentCalculation = (eval(currentCalculation) / 100).toString();
        } catch (error) {
          currentCalculation = "Error";
        }
        break;


      default:
        // Append numbers, operators, and other inputs
        currentCalculation += value;
        break;
    }

    // Update the display
    updateDisplay(currentCalculation);
  });
});

// Initialize the display with "0"
updateDisplay("");

