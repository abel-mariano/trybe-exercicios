const sum = require('./sum');

/* Teste se o retorno de sum(4, 5) é 9;
Teste se o retorno de sum(0, 0) é 0.
Teste se a função sum lança um erro quando os parâmetros são number 4 e string '5';
Teste se a mensagem de erro é 'parameters must be numbers' quando realizar a chamada sum(4, '5'); */

describe('1 - Crie os casos de teste da função `Sum`', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
})