const { info, printMessage } = require('./printMessage');

describe('2 - Implemente o caso de teste para a função `printMessage`', () => {
  it ('Testa a propriedade personagem no objeto.', () => {
    expect(info).toHaveProperty('personagem');
  });
});

describe('3 - Ainda sobre a função `printMessage`, adicione os casos de teste a seguir`', () => {
  it ('Testa a informação de boas vindas.', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
  });
  
  it ('Testa a informação referente ao nome da personagem.', () => {
    expect(printMessage(info)).toMatch(info.personagem);
  });
});

describe('4 - Crie um fluxo de exceção para a função `printMessage`', () => {
  it ('Testa o fluxo de exceção da função printMessage.', () => {
    expect(() => printMessage('Margarida')).toThrow('objeto inválido');
  });
});