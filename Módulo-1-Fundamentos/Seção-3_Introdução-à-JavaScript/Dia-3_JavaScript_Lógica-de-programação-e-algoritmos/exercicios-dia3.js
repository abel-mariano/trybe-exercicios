/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

➡️Solução: */

let fatorial = 10;

for(let index = fatorial; index > 0; index -= 1){
  fatorial *= index;
}
console.log(fatorial);

/* 2- Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';

➡️Solução: */

let word = 'tryber';
let reverseWord = '';

for(let index = 0; index < word.length; index += 1){
  reverseWord += word[word.length - 1 - index]
}
console.log(reverseWord);

/* 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

➡️Solução: */

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];

for(let index = 0; index < array.length; index += 1){
  if(array[index].length > biggestWord.length){
    biggestWord = array[index];
  }
}
console.log(biggestWord);

for(let index = 0; index < array.length; index += 1){
  if(array[index].length < smallestWord.length){
    smallestWord = array[index];
  }
}
console.log(smallestWord);

/* 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

➡️Solução: */

let biggestNumber = 0;


for(let currentNumber = 2; currentNumber <= 50; currentNumber += 1){
  let isPrime = true;

  for(let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1){
    if(currentNumber % currentDivisor === 0){
      isPrime = false;
    }
  }
  if(isPrime){
    biggestNumber = currentNumber;
  }
}
console.log(biggestNumber);
