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
display.textContent = "";

let firstNumber = "";
let secondNumber = "";
let operator = "";

function updateDisplay(value) {
  display.textContent += value;
  if (operator === "") {
    firstNumber += value;
  } else {
    secondNumber += value;
  }

  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);
}

let numberButtons = document.getElementById("calculatorButtons");

for (let i = 0; i <= 9; i++) {
  document.getElementById(`btn${i}`).addEventListener("click", function () {
    updateDisplay(i.toString());
  });
}

let addition = document.getElementById("add").addEventListener("click", () => {
  if (secondNumber !== "") {
    firstNumber = operate(
      operator,
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    ).toString();
    secondNumber = "";
  }

  operator = "+";
  display.textContent += " + ";
});
let subtraction = document
  .getElementById("subtract")
  .addEventListener("click", () => {
    if (secondNumber !== "") {
      firstNumber = operate(
        operator,
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      ).toString();
      secondNumber = "";
    }

    operator = "-";
    display.textContent += "-";
  });
let multiplication = document
  .getElementById("multiply")
  .addEventListener("click", () => {
    if (secondNumber !== "") {
      firstNumber = operate(
        operator,
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      ).toString();
      secondNumber = "";
    }

    operator = "*";
    display.textContent += "*";
  });
let division = document
  .getElementById("divide")
  .addEventListener("click", () => {
    operator = "/";
    display.textContent += "/";
  });

let clear = document.getElementById("clear").addEventListener("click", () => {
  display.textContent = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
});

let equal = document.getElementById("equal").addEventListener("click", () => {
  if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
    display.textContent = operate(
      operator,
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );
  }
});

let backspace = document.getElementById("backspace").addEventListener("click", () => {
    if (secondNumber !== "") {
        secondNumber = secondNumber.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
      } else if (operator !== "") {
        operator = "";
        display.textContent = display.textContent.slice(0, -3);
      } else if (firstNumber !== "") {
        firstNumber = firstNumber.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
      }   
});

let decimal = document.getElementById("decimal").addEventListener("click", () => {
    if (!display.textContent.includes(".")) {
      display.textContent += ".";
    }
  });
  