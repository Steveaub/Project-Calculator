function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Cannot divide by zero!");
    return "Error";
  }
  return a / b;
}

let firstNumber;
let operator;
let secondNumber;

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    alert("Unsupported operator!");
    return "Error";
  }
}

let display = document.getElementById("display");
display.textContent = "4";

function updateDisplay(value) {
    display.textContent = value;
}



let buttons = document.getElementById("calculatorButtons");

for (let i = 0; i <= 9;i++) {
    document.getElementById(`btn${i}`).addEventListener('click', function() {
        updateDisplay(i.toString());
});
}




let addition = document
  .getElementById("add")
  .addEventListener("click", () => add());
let subtraction = document
  .getElementById("subtract")
  .addEventListener("click", () => subtract());
let multiplication = document
  .getElementById("multiply")
  .addEventListener("click", () => multiply());
let division = document
  .getElementById("divide")
  .addEventListener("click", () => divide());



