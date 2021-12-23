function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, ...args) {
  switch (operator) {
    case "+":
      return add(...args)
      break;
    case "-":
      return subtract(...args)
      break;
    case "×":
      return multiply(...args)
      break;
    case "÷":
      return divide(...args)
      break;
    default:
      break;
  }
}

let inputBox = document.getElementById('calculator_screen');
let buttonInputs = document.querySelectorAll('.inputs');
let clearButton = document.getElementById('clear');
let operatorButtons = document.querySelectorAll('.operator');
let operator = "";
let total = 0



buttonInputs.forEach(button => button.addEventListener('click', e => inputBox.textContent += e.target.textContent));

operatorButtons.forEach(button => button.addEventListener('click', e => {
  operator = e.target.textContent;
  total = inputBox.textContent;
  console.log(total)
}));



clearButton.addEventListener('click', () => inputBox.textContent = "");