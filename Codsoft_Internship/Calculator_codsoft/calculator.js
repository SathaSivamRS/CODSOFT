let expression = '';

function appendValue(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result;
    document.getElementById('display').value = expression;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
    appendValue(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === 'Backspace') {
    expression = expression.slice(0, -1);
    document.getElementById('display').value = expression;
  }
});
