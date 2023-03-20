/* 🚀 Exercício 3

- Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:

De olho na dica 👀: Use o default params.

➡️Solução: */

const greet = (name, msg = 'Olá') => `${msg} ${name}`;

console.log(greet('John'));
console.log(greet('John', 'Good morning'));
console.log(greet('Isabela', 'Oi'));