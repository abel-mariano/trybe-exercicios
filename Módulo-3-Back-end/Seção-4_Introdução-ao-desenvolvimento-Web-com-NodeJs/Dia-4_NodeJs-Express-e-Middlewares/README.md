# Exercício 1 🚀
Uma startup de Ecoturismo te procurou para construir uma aplicação back-end que auxilie na criação e compartilhamento de locais ainda não registrados na natureza. O objetivo é valorizar e promover a capacidade turística do Brasil e os principais requisitos da API que essa startup solicitou são:

- Cadastrar novas atividades de ecoturismo com as seguintes informações:
  - Nome da atividade;
  - Preço;
  - Descrição: contendo avaliação, dificuldade e data de criação da atividade.

- Analisando os requisitos acima, a pessoa Tech Lead identificou as seguintes chaves para a requisição:
```
{
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}
```
### Agora, faça os exercícios abaixo:

1. Crie um servidor Node.js utilizando o framework Express com a estrutura inicial do app.js e server.js e prepare o ambiente instalando a biblioteca nodemon.
```
Solução:
// Arquivo app.js
Primeiro passo: Crie o arquivo app.js. Agora, importe a biblioteca express e chame a função em uma variável.

// Arquivo server.js
Segundo passo: Crie o arquivo server.js e importe o arquivo criado no Primeiro passo. Agora, a partir dessa importação utilize o método listen adicionando como parâmetro a porta e a mensagem desejada para o servidor.
```

2. Adicione um middleware criado pela comunidade que tem como função interpretar conteúdo JSON.
```
Solução:
// Arquivo app.js
Primeiro passo: Utilize o método use e use o express.json() como middleware para interpretar os conteúdos JSON.
```

3. Crie um endpoint POST com a rota /activities para adicionar novas atividades. Ela deve:

- Retornar o status 201 e uma mensagem de sucesso quando a atividade tiver sido inserida (formato json);
  - Sugestão: { "message": "Atividade cadastrada com sucesso!" }.

```
Solução:
// Arquivo app.js
Primeiro passo: Utilize o método post vindo do arquivo app. Após isso, adicione a rota /activities como primeiro parâmetro e como segundo parâmetro uma callback responsável por lidar com as requisições(_req) e respostas(res) do servidor.

// Arquivo app.js
Segundo passo: Utilize o método status enviando o código de resposta HTTP 201 com a mensagem informando que a atividade foi cadastrada com sucesso.
```

4. Crie um middleware de validação para a chave name. Ela deve:

- Ser obrigatória;
- Retornar o status 400 e uma mensagem em formato json;
  - Sugestão: { "message": "O campo name é obrigatório" }.
- Ter mais de 4 caracteres;
- Retornar o status 400 e uma mensagem em formato json;
  - Sugestão: { "message": "O campo name deve ter pelo menos 4 caracteres" }.

```
Solução:
// Arquivo middlewares/validateName.js
Primeiro passo: Crie uma pasta chamada middlewares e crie o arquivo validateName.js realizando o module.exports de uma função anônima com os parâmetros req, res e next.

Segundo passo: Acesse a chave name usando req.body. Em seguida, aplique uma condicional para verificar se o name existe.

Terceiro passo: Se não existir, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo é obrigatório.

Quarto passo: Agora, adicione outra condicional para verificar o tamanho da chave name. Se essa chave for menor que 4, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo deve ter mais de 4 caracteres. Não se esqueça de chamar a função next() ao final para passar para os próximos middlewares.

// Arquivo app.js
Quinto passo: Por fim, realiza-se a importação do arquivo middlewares/validateName.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
```

5. Crie um middleware de validação para a chave price. Ela deve:

- Ser obrigatória;
- Retornar o status 400 e uma mensagem em formato json;
  - Sugestão: { "message": "O campo price é obrigatório" }.
- Ser um número maior ou igual a zero;
- Retornar o status 400 e uma mensagem em formato json;
  - Sugestão: { "message": "O campo price deve ser um número maior ou igual a zero" }.

```
Solução:
// Arquivo middlewares/validatePrice.js
Primeiro passo: Crie o arquivo validatePrice.js dentro do diretório middlewares realizando o module.exports de uma função anônima com os parâmetros req, res e next.

Segundo passo: Acesse a chave price usando req.body. Em seguida, aplique uma condicional para verificar se o price está definido.

Terceiro passo: Se não estiver definido, utilizamos o método status enviando o código de resposta HTTP 400 com uma mensagem informando que o campo é obrigatório.

Quarto passo: Agora, adicione outra condicional para verificar o valor da chave price. Se essa chave for menor que 0 ou ter o tipo diferente de número, utilizamos o método status enviando o código de resposta HTTP 400 com uma mensagem informando que o campo deve ser maior ou igual a zero. Não se esqueça de chamar a função next() ao final para passar para os próximos middlewares.

// Arquivo app.js
Quinto passo: Por fim, realiza-se a importação do arquivo middlewares/validatePrice.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
```

6. Crie um middleware de validação para a chave description que possui as chaves createdAt, rating e difficulty. Ela deve:

- Ter todas as chaves obrigatórias;
- Retornar o status 400 para todas e uma mensagem em formato json;
  - Sugestão: { "message": "O campo description é obrigatório" };
  - Sugestão: { "message": "O campo createdAt é obrigatório" };
  - Sugestão: { "message": "O campo rating é obrigatório" };
  - Sugestão: { "message": "O campo difficulty é obrigatório" }.

```
Solução:
// Arquivo middlewares/validateDescription.js
Primeiro passo: Crie o arquivo validateDescription.js dentro do diretório middlewares realizando o module.exports de uma função anônima com os parâmetros req, res e next.

Segundo passo: Acesse a chave description usando req.body. Em seguida, aplique uma condicional para verificar se o description existe.

Terceiro passo: Se não existir, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo é obrigatório.

Quarto passo: Agora, adicione outra condicional para verificar a chave description.createdAt existe. Se não existir, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo é obrigatório.

Quinto passo: Agora, adicione outra condicional para verificar se a chave description.rating existe. Se não existir, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo é obrigatório.

Sexto passo: Agora, adicione outra condicional para verificar se a chave description.difficulty existe. Se não existir, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo é obrigatório.

// Arquivo app.js
Sétimo passo: Por fim, realiza-se a importação do arquivo middlewares/validateDescription.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
```

7. Crie um middleware de validação para a chave createdAt. Ela deve:

- Ter uma data válida no formato dd/mm/aaaa;
- Retornar o status 400 e uma mensagem em formato json;
  - Sugestão: { "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" }.

```
Solução:
// middlewares/validateCreatedAt.js
Primeiro passo: Crie o arquivo validateCreatedAt.js dentro do diretório middlewares realizando o module.exports de uma função anônima com os parâmetros req, res e next.

Segundo passo: Acesse a chave createdAt usando req.body.description. Agora, precisamos buscar uma regex que verifique que o formato da nossa data seja dd/mm/yyyy e usar o método test que faz a validação da data enviada.

Terceiro passo: Se o formato não for válido, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo deve ter um formato válido.

// Arquivo app.js
Quarto passo: Por fim, realiza-se a importação do arquivo middlewares/validateCreatedAt.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
```

8. Crie um middleware de validação para a chave rating. Ela deve:

- Ter um número inteiro entre 1 e 5;
- Retornar o status 400 e uma mensagem em formato json;
  - Sugestão: { "message": "O campo rating deve ser um número inteiro entre 1 e 5" }.

```
Solução:
// Arquivo middlewares/validateRating.js
Primeiro passo: Crie o arquivo validateRating.js dentro do diretório middlewares realizando o module.exports de uma função anônima com os parâmetros req, res e next.

Segundo passo: Acesse a chave rating usando req.body.description. Em seguida, aplique uma condicional para verificar se o rating é um número inteiro ou menor que 1 ou maior que 5.

Terceiro passo: Se o número não for válido, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo deve ser um inteiro entre 1 e 5.

// Arquivo app.js
Quarto passo: Por fim, realiza-se a importação do arquivo middlewares/validateRating.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
```

9. Crie um middleware de validação para a chave difficulty. Ela deve:

- Ter apenas 3 classificações: “Fácil”, “Médio” ou “Difícil”;
- Retornar o status 400 e uma mensagem em formato json;
  - Sugestão: { "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" }.

```
Solução:
// Arquivo middlewares/validateDifficulty.js
Primeiro passo: Crie o arquivo validateDifficulty.js dentro do diretório middlewares realizando o module.exports de uma função anônima com os parâmetros req, res e next.

Segundo passo: Acesse a chave difficulty usando req.body.description. Agora, adicione as classificações “Fácil”, “Médio” ou “Difícil” em um array. Em seguida, aplique uma condicional para verificar se o difficulty está incluso nesse array de classificações.

Terceiro passo: Se a classificação não estiver no array, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo deve conter as classificações solicitadas.

// Arquivo app.js
Quarto passo: Por fim, realiza-se a importação do arquivo middlewares/validateDifficulty.js para o app.js e adicionamos o middleware como segundo parâmetro para o método post que é o responsável por criar novas atividades.
```