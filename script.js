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

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "×":
      return multiply(num1, num2);
    case "÷":
      if (num2 === 0) {
        return null;
      } else {
        return divide(num1, num2);
      }
      default:
        return null;
  }
}

let firstNum = "";
let secondNum = "";
let currentInput = null;
let resetInput = false;
const inputBox = document.getElementById('input_screen');
const totalBox = document.getElementById('total_screen');
const buttonInputs = document.querySelectorAll('.inputs');
const decimalButton = document.getElementById('decimal')
const clearButton = document.getElementById('clear');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equal_button');


equalsButton.addEventListener('click', evaluate);

buttonInputs.forEach(button => button.addEventListener('click', () => appendNumber(button.textContent)));

operatorButtons.forEach(button => button.addEventListener('click', () => setOperation(button.textContent)));

clearButton.addEventListener('click', () => {
  inputBox.textContent = '0';
  totalBox.textContent = '';
  firstNum = '';
  secondNum = ''
  currentInput = null;
});

decimalButton.addEventListener('click', appendDecimal)

function appendNumber(number) {
  if (inputBox.textContent === '0' || resetInput)
    resetScreen();
  inputBox.textContent += number;
}

function appendDecimal() {
  if (resetInput) resetScreen()
  if (inputBox.textContent === '')
    inputBox.textContent = '0';
  if (inputBox.textContent.includes('.')) return
  inputBox.textContent += '.';
}

function resetScreen() {
  inputBox.textContent = '';
  resetInput = false;
}

function setOperation(operator) {
  if (currentInput !== null) evaluate();
  firstNum = inputBox.textContent;
  currentInput = operator;
  totalBox.textContent = `${firstNum} ${currentInput}`;
  resetInput = true;
}

function evaluate() {
  if (currentInput === null || resetInput) return
  if (currentInput === '÷' && inputBox.textContent === '0') {
    alert("Cannot divide by 0!")
    return
  }
  secondNum = inputBox.textContent
  inputBox.textContent = roundResult(
    operate(currentInput, firstNum, secondNum)
  )
  totalBox.textContent = `${firstNum} ${currentInput} ${secondNum} =`
  currentInput = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}