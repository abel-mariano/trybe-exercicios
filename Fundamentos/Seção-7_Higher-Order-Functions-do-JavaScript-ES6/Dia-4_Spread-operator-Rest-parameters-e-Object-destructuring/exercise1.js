/* 🚀 Exercício 1

- Dado o código abaixo, altere a chamada da função rectangleArea de forma que seja impressa a área dos 3 retângulos (rectangle1, rectangle2 e rectangle3). O código deve retornar em sequência 2, 15 e 54.
De olho na dica 👀: Use o spread operator.

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(parametro)); // Altere o parâmetro recebido por rectangleArea()
});

➡️Solução: */

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
console.log(rectangleArea(...rectangle));
});

/* 🚀 Exercício 2

- Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6), o número 15 deve ser retornado.
De olho na dica 👀: Use o parâmetro rest.

➡️Solução: */

const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val), 0);

/* 🚀 Exercício 3

- Escreva a função personLikes, que recebe como parâmetro os objetos alex ou gunnar. Cada objeto representa uma pessoa, e a função deve retornar todos os gostos daquela pessoa, conforme mostrado abaixo:

De olho na dica 👀: antes de olhar o gabarito, que tal uma dica? Use o object destructuring.

// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
// <nome> tem <anos de idade> e gosta de <gostos da pessoa>

// Retornos esperados:
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

➡️Solução: */

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};
 
const gunnar = {
name: 'Gunnar',
age: 30,
likes: ['hiking', 'scuba diving', 'taking pictures'],
nationality: 'Icelandic',
};
 
 
const personLikes = ({ name, age, likes }) => (
`${name} is ${age} years old and likes ${likes.join(', ')}.`
);
 
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

/* 🚀 Exercício 4

- Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
De olho na dica 👀: Use o object destructuring.

➡️Solução: */

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (arr) => {
  return people.filter(({ nationality, bornIn }) => {
    return nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000;
  });
}

/* 🚀 Exercício 5

- Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida:
De olho na dica 👀: Use o object destructuring.

➡️Solução: */

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;

// retorno esperado
console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

/* 🚀 Exercício 6

- O objeto yearSeasons representa as estações do ano. Cada chave do objeto é uma estação, e o valor de cada chave é um array de strings que representa os meses daquela estação. A partir desse objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
Obs. 💬: As estações do ano aqui descritas têm base nas estações do hemisfério norte.

De olho na dica 👀: antes de olhar o gabarito, que tal uma dica? Use o object destructuring e o spread operator.

➡️Solução: */


const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.

const { spring, summer, autumn, winter } = yearSeasons;
const months = [...spring, ...summer, ...autumn, ...winter];

console.log(months);