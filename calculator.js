// Function to update the display value
function updateDisplay(value) {
  calculator.display.value += value;
}

// Function to clear the display without saving to localStorage
function clearDisplayWithoutSaving() {
  calculator.display.value = "";
}

// Function to save the entire calculator state to localStorage
function saveCalculatorState() {
  var calculatorState = {
    displayValue: calculator.display.value,
  };
  localStorage.setItem("calculatorState", JSON.stringify(calculatorState));
}

// Function to load the calculator state from localStorage
function loadCalculatorState() {
  var storedState = localStorage.getItem("calculatorState");
  if (storedState) {
    var calculatorState = JSON.parse(storedState);
    calculator.display.value = calculatorState.displayValue;
  }
}

// Function to perform the calculation when the equals button is clicked
function calculateResult() {
  calculator.display.value = eval(calculator.display.value);
  saveCalculatorState();
}

// Function to handle the clear button and save the state to localStorage
function clearDisplay() {
  clearDisplayWithoutSaving();
  // Save the state after clearing
  saveCalculatorState();
}

// Functions for number buttons
function numberButton(value) {
  updateDisplay(value);
}

// Functions for operation buttons
function operationButton(value) {
  updateDisplay(value);
}

// Call the load function when the page loads
window.onload = loadCalculatorState;
