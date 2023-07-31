/* Exercício 6
🚀 Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.

Utilize async/await para escrever seu código. Procure não utilizar callbacks. */

/* A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

🔜Resposta A: */

const fs = require('fs').promises;

const readAll = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
};

const main = async () => {
  await readAll();
}

main();

/* B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

🔜Resposta B: */

const fs = require('fs').promises;

async function getSimpsonById(id) {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!chosenSimpson) {
    /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
    * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
    * tendo como motivo o que passarmos para o `throw`.
    * Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'
    */
    throw new Error('id não encontrado');
  }
  /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,
      * `return` aciona o fluxo de sucesso e resolve a Promise.
      * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`
      * dentro do executor de uma Promise.
      */
  return chosenSimpson;
}

async function main() {
  const simpson = await getSimpsonById(1);
  console.log(simpson);
}

main();

/* C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

🔜Resposta C: */

const fs = require('fs').promises;

async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

function main() {
  filterSimpsons();
  // caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente
}

main();

/* D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

🔜Resposta D: */

const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id))); // aqui convertemos o ID pra número, já que ele está salvo no JSON como string
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

function main() {
  createSimpsonsFamily();
  // caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente
}

main();

/* E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

🔜Resposta E: */

const fs = require('fs').promises;

async function addNelsonToFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

function main() {
  addNelsonToFamily(); // caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente
}

main();

/* F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

🔜Resposta F: */

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim:
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

function main() {
  replaceNelson(); // caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente
}

main();