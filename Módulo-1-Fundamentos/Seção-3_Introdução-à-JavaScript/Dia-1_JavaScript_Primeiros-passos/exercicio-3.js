/* 🚀 Para fixar - Condições If e Else

1- Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima “Parabéns, você faz parte do grupo das pessoas aprovadas!”
Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
Se a nota for menor que 60, imprima “Infelizmente, você reprovou.”
Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
Altere o valor da nota para verificar se as condições que você implementou funcionam.

Solução: */
	const grade = 80;
	
	if (grade >= 80) {
		console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
	} else if (grade < 80 && grade >= 60) {
		console.log("Você está na nossa lista de espera");
	} else if (grade < 60) {
		console.log("Infelizmente, você reprovou.");
	};
