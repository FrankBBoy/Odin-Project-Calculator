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

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2)
      break;
    case "-":
      return subtract(num1, num2)
      break;
    case "*":
      return multiply(num1, num2)
      break;
    case "/":
      return divide(num1, num2)
      break;
    default:
      break;
  }
}

let inputBox = document.querySelector('input');
let buttonInputs = document.querySelectorAll('.inputs');
let clearButton = document.getElementById('clear');
let operatorButtons = document.querySelectorAll('.operator');
let operator = "";
let nextNum = 0



buttonInputs.forEach(button => button.addEventListener('click', e => inputBox.value += e.target.innerHTML));

operatorButtons.forEach(button => button.addEventListener('click', e => {
  operator = e.target.innerHTML;
  nextNum = inputBox.value
}));



clearButton.addEventListener('click', () => inputBox.value = "");