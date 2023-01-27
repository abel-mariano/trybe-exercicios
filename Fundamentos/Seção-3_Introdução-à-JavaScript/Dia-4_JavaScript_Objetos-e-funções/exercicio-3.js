/* - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)

➡️Solução: */

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

/* - Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

➡️Solução: */

function maiorNumero(primeiroNumero, segundoNumero) {
  if (primeiroNumero > segundoNumero) {
    return `${primeiroNumero} é maior que ${segundoNumero};`
  } else {
    return `${segundoNumero} é maior que ${primeiroNumero};`
  }
}

/* - Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

➡️Solução: */

function maiorDeTres(primeiroNumero, segundoNumero, terceiroNumero) {
  if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    return `O maior número é: ${primeiroNumero};`
  } else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
    return `O maior número é: ${segundoNumero};`
  } else {
    return `O maior número é: ' ${terceiroNumero};`
  }
}

/* - Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

➡️Solução: */

function positiveNegative(number) {
  if (number > 0) { // Vai Testar se o número é positivo (maior que 0)
    return 'positive';
  } else if (number < 0) { // Vai Testar se o número é negativo (menor que 0)
    return 'negative';
  } else { // Se nenhum teste passar, o número é igual a 0
    return 'zero';
  }
}

/* - Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
  - Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
  - Um ângulo será considerado inválido se não tiver um valor positivo.

➡️Solução: */

function triangleAnglesValidate(angleA, angleB, angleC) {
  let sumOfAngles = angleA + angleB + angleC;
  let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;

  if (allAnglesArePositives) {
    if (sumOfAngles === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Erro: ângulo inválido';
  }
}