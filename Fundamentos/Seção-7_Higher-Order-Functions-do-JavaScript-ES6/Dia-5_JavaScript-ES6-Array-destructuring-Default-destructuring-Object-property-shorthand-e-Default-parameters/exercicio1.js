/* 🚀 Exercício 1

- Escreva a função swap, que, dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5].

De olho na dica 👀: Use o array destructuring e abbreviation object literal.

➡️Solução: */

const myList = [5, 2, 3];

const swap = ([a, b, c]) => [c, b, a];