# Exercício 2 🚀
Parabéns! Seu cliente ficou muito satisfeito com o trabalho e solicitou mais alguns requisitos para você implementar. Veja abaixo:

- Cadastrar pessoas usuárias das atividades de ecoturismo com as seguintes informações:
  - Email;
  - Senha;
  - Primeiro nome;
  - Telefone;
  - Permitir que somente pessoas cadastradas realizem o cadastro de novas atividades de ecoturismo.

## Agora, faça os exercícios abaixo:

1. Crie um endpoint POST com a rota /signup para cadastrar pessoas usuárias. Ela deve:

- Ter os campos email, password, firstName e phone obrigatoriamente;
- Caso os campos não sejam preenchidos, retornar o status 401 - Unauthorized e uma mensagem (formato json);
  - Sugestão: { "message": "Campos ausentes!" }.
- Gerar um token aleatório válido;
- Retornar o status 200 e uma mensagem contendo o token (formato json);
  - Sugestão: { token: '<token-aleatorio>' }.

*De olho na dica👀: Para gerar o token você pode utilizar a função randomBytes, do módulo crypto do Node, dessa forma:*
```
const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;
```

```
Solução:
// Arquivo app.js
Primeiro passo: Utilize o método post vindo do arquivo app. Após isso, adicione a rota /signup como primeiro parâmetro e como segundo parâmetro uma callback responsável por lidar com as requisições(_req) e respostas(res) do servidor.

Segundo passo: Acesse as chaves email, password, firstName e phone usando req.body. Em seguida, aplique uma condicional para verificar se todos os campos existem por meio do método includes.

Terceiro passo: Se não existirem, utilizamos o método status enviando o código de resposta HTTP 401 com a mensagem informando que os campos são obrigatórios.

// Arquivo utils/generateToken.js
Quarto passo: Crie um diretório utils e dentro crie um arquivo chamado generateToken.js. Agora, vamos adicionar o código que é fornecido como dica.

// Arquivo app.js
Quinto passo: Importe o arquivo utils/generateToken.js para o app.js e chame a função em uma variável chamada token.

Sexto passo: Por fim, utilizamos o método status enviando o código de resposta HTTP 200 com um token aleatório e válido.
```