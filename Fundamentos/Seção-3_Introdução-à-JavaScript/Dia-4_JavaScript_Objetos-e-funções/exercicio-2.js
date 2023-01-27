/* No exemplo acima, utilizamos o for/of para percorrer o nosso iterável e nos retornar o valor dos índices.

Agora que você já sabe a diferença entre eles e como usá-los, vamos praticar?

Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

➡️Solução: */

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let name in names) {
  console.log(`Olá ${names[name]}`)
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(`${key} ${car[key]}`);
}
