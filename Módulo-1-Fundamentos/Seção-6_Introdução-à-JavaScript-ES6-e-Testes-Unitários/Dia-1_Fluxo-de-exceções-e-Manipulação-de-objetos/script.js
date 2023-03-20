/* function calculateSum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = Number(value1) + Number(value2);

  return result;
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  const result = calculateSum();
  displayResult(result);
} */

const inputValid = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error('Preencha os campos para realizar a soma');
  }
  if (Number.isNaN(Number(value1)) || Number.isNaN(Number(value2))) {
    throw new Error('Informe dois números para realizar a soma');
  }
};

function calculateSum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    inputValid(value1, value2);
    const result = Number(value1) + Number(value2);
    return result;
  } catch (error) {
    document.getElementById('result').innerHTML = `Erro: ${error.message}`;
  }
}

function displayResult(result) {
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
}

function sum() {
    const result = calculateSum();
    if (result) displayResult(result);
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
