/* 🚀 Lidando com Arrays
- Iremos utilizar esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

1- Percorra o array imprimindo todos os valores nele contidos com a função console.log();

➡️Solução: */
  for(let index = 0; index < numbers.length; index += 1){
      console.log(numbers[index])
  }

/* 2- Some todos os valores contidos no array e imprima o resultado;

➡️Solução: */
  for(let index = 0; index < numbers.length; index += 1){
      soma += numbers[index];
  }
  console.log(soma)

/* 3- Calcule e imprima a média aritmética dos valores contidos no array;
- A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

➡️Solução: */
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let soma = 0;
  let media;

  for(let index = 0; index < numbers.length; index += 1){
      soma += numbers[index];
      media = soma / numbers.length;
  }
  console.log(media)

  //ou

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let sum = 0;

  for (let index = 0; index < numbers.length; index += 1) {
      sum += numbers[index];
  }
  let average = sum / numbers.length;
  console.log(average);


/* 4- Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

➡️Solução: */
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let soma = 0;
  let media;

  for(let index = 0; index < numbers.length; index += 1){
      soma += numbers[index];
      media = soma / numbers.length;
  }
  if(media > 20){
      console.log('valor maior que 20')
  } else{
      console.log('valor menor ou igual a 20')
  }
  console.log(media)

/* 5- Utilizando for, descubra qual o maior valor contido no array e imprima-o;

➡️Solução: */
	let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
	let maiorNumero = 1;

	for(let index = 0; index < numbers.length; index +=1){
		if(numbers[index] > maiorNumero){
		  maiorNumero = numbers[index];
		}
	}
	console.log(maiorNumero);
	
/* 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

➡️Solução: */
	let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
	let impar = 0;

	for(let index = 0; index < numbers.length; index +=1){
		if(numbers[index] % 2 !== 0){
		  impar += 1;
		}
	}
	if(impar === 0){
		console.log('Nenhum valor impar encontrado.')
	} else{
		console.log(impar)
	}
	
/* 7- Utilizando for, descubra qual o menor valor contido no array e imprima-o;

➡️Solução: */
	let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
	let menorNumero = numbers[0];

	for(let index = 1; index < numbers.length; index += 1){
		if(numbers[index] < menorNumero){
		  menorNumero = numbers[index];
		}
	}
	console.log(menorNumero);
	
/* 8- Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

➡️Solução: */
	let numeros = [];

	for(let index = 1; index <= 25; index += 1){
		numeros.push(index)
	}
	console.log(numeros);
	
/* 9- Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

➡️Solução: */
	let numeros = [];

	for(let index = 1; index <= 25; index += 1){
		numeros.push(index);
	}
	console.log(numeros);

	for(let index = 0; index <= 25; index += 1){
		console.log(numeros[index] / 2);
	}
