//  Função que será o segundo parâmetro do eventListener:
function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

// O botão deve estar preparado para funcionar assim que abrirmos a página. Para isso, colocaremos então o addEventListener dentro do window.onload.
window.onload = function () {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
};

// Função responsável por limpar essas informações:
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    if(formElements[index].type === 'radio' || formElements[index].type === 'checkbox'){
      userInput.checked = false;
    } else {
      userInput.value = '';
    };
  }
  textArea.value = '';
}

// Habilitar essa função em nosso botão:

// Função responsável por habilitar o botão submit.
function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}

//A propriedade disabled do submitBtn é igual à negação da propriedade checked da checkbox agreement. Sendo assim, se a checkbox estiver “checkada”, o botão não estará desabilitado.
//Assim como as demais, adicionar essa função num addEventListener, porém com checkBoxes não usamos 'click' e sim 'change'.

// Função que validará esses dados:
function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;
  const name = document.querySelector('#fullName').value.length;
  const invalidName = name < 10 || name > 40;
  const reason = document.querySelector('#question').value.length;
  const invalidReason = reason > 500;
  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}

// Colocar dentro da função handleSubmit que já está funcionando.