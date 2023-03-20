let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

//Adicionando dias da semana
const daysOfTheWeek = () => {
  let weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  let weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    let days = weekDays[index];
    let dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    weekDaysList.appendChild(dayListItem);
  };
}

daysOfTheWeek();

// Adicionando dias do mês.
let DaysOfTheMonth = () => {
  let ulDays = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let liDays = decemberDaysList[index];
    let daysList = document.createElement('li');
    daysList.innerHTML = liDays;
    ulDays.appendChild(daysList);

    if (liDays === 24 || liDays === 31) {
      daysList.className = 'day holiday';
      ulDays.appendChild(daysList);
    } else if (liDays === 4 || liDays === 11 || liDays === 18) {
      daysList.className = 'day friday';
      ulDays.appendChild(daysList);
    } else if (liDays === 25) {
      daysList.className = 'day holiday friday';
      ulDays.appendChild(daysList);
    } else {
      daysList.className = 'day';
      ulDays.appendChild(daysList);
    }
  }
}

DaysOfTheMonth();

//Função muda cor holiday
function displayHolidays() {
  let btnHoliday = document.querySelector('#btn-holiday');
  let holiday = document.querySelectorAll('.holiday');
  let newColor = 'rgb(51, 181, 64)';
  let originalColor = 'rgb(238, 238, 238)';

  btnHoliday.addEventListener('click', () => {
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === newColor) {
        holiday[index].style.backgroundColor = originalColor;
      } else {
        holiday[index].style.backgroundColor = newColor;
      }
    }
  })
}

displayHolidays();

//Modificando texto de sexta-feira
const displayFridays = (fridaysArray) => {
  let FridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU';
  FridayButton.addEventListener('click', () => {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
        //caso o texto não tenha sido substituído, ao clicar no botão ele será substituído pelo novo texto;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
        //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
      }
    }
  });
}

let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

//Efeito zoom
const dayMouseOver = () => {
  let ulDays = document.querySelector('#days');
  ulDays.addEventListener('mouseover', (ulDays) => {
    ulDays.target.style.fontSize = '30px';
    ulDays.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
  });
}
const dayMouseOut = () => {
  let ulDays = document.querySelector('#days');
  ulDays.addEventListener('mouseout', (ulDays) => {
    ulDays.target.style.fontSize = '20px';
    ulDays.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
  });
}

dayMouseOver();
dayMouseOut();

//Selecionando tarefa
const setTaskClass = () => {
  let tasks = document.getElementsByClassName('task');
  for (const task of tasks) {
    task.addEventListener('click', (divColor) => {
      let previous = document.querySelector('.selected');
      divColor.target.classList.add('selected');
      if (previous !== null) {
        previous.classList.remove('selected');
      }
    });
  }
};

setTaskClass();

//função que atribua a cor da tarefa ao dia do calendário
const setDayColor = () => {
  let ulDays = document.querySelector('#days');
  ulDays.addEventListener('click', (event) => {
    let selectedTask = document.querySelector('.selected');
    if (selectedTask === null || 
      event.target.style.color === selectedTask.style.backgroundColor) {
      // Se não houver tarefa selecionada
      // ou se o dia clicado já é da cor selecionada
      // aplicaremos a cor padrão
      event.target.style.color = 'rgb(119,119,119)';
    } else {
      // Se o dia clicado é de cor diferente da selecionada
      // aplica a cor selecionada ao dia
      event.target.style.color = selectedTask.style.backgroundColor;
    }
  });
};

setDayColor();

//adicionar compromissos ao seu calendário
const addNewTask = () => {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.getElementById('task-list');
  addInputButton.addEventListener('click', () => {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;
      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });
  getInputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;
      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}
addNewTask();