/* 🚀 Exercício 3
Crie um servidor Node.js utilizando o framework Express.
➡️ Resposta:
- Primeiro passo: Dentro de src, crie o arquivo app.js. Dentro deste arquivo, importe a biblioteca express, crie uma variável para instanciar o express e exporte essa variável.
- Segundo passo: Também dentro de src, crie o arquivo server.js e importe o arquivo criado no Primeiro passo. Agora, a partir dessa importação utilize o método listen adicionando como parâmetro a porta e a callback com a mensagem desejada para o servidor. */

const app = require('./app');

app.listen(3001, () => console.log('server running on port 3001'));
