# Boas-vindas ao repositório do projeto Store Manager

## Entregáveis
  
<details>
<summary>🧑‍💻 O que deverá ser desenvolvido</summary>

- Você vai desenvolver uma API RESTful utilizando a arquitetura em camadas!

- A API a ser construída é um sistema de gerenciamento de vendas em que será possível criar, visualizar, deletar e atualizar produtos e vendas. Você deverá utilizar o banco de dados MySQL para a gestão de dados.

- Você também irá desenvolver testes para garantir as funcionalidade das implementações, uma habilidade essencial para a pessoa desenvolvedora.

</details>
  
<details>
  <summary>📝 Habilidades a serem trabalhadas </summary>

Neste projeto, verificamos se você é capaz de:

- Interagir com um banco de dados relacional MySQL;
- Implementar uma API utilizando arquitetura em camadas;
- Criar validações para os dados recebidos pela API;
- Escrever testes para APIs para garantir a implementação dos endpoints;

</details>

## Orientações

> ⚠️ Aviso: Não é necessário entrar no container para rodar os testes e nem para iniciar a aplicação.
>
> - O container `backend` inicia a aplicação automaticamente.
>
> - ⚠️ É necessário ter a versão Node 16.14 ou superior instalada localmente.

<details>
<summary>🐳 Iniciando a aplicação no Docker Compose</summary>

```bash
# Instale as dependências
npm install

# Inicie os containers do compose `backend` e `db`
# A aplicação estará disponível em `http://localhost:3001` em modo de desenvolvimento
docker-compose up -d

# É possível ver os logs da aplicação com `docker logs -n 10 -f <nome-do-container>`
docker logs -n 10 -f store_manager
```

</details>

<details>
<summary>🎲 Tabelas do banco de dados</summary>

|Diagrama de Entidade-Relacionamento|
|:--:|
|![DER](./public/erStoreManager.png)|

|Tabela|Formato|Notas|
|---|---|---|
|`products`|![Tabela Produtos](./public/tableproducts.png)|O `id` é gerado automaticamente|
|`sales`|![Tabela Vendas](./public/tablesales.png)|O `id` e `date` são gerados automaticamente|
|`sales_products`|![Tabela Vendas-Produtos](./public/tablesalesproducts.png)|Os registros nessa tabela são removidos automaticamente em caso de remoção do produto ou da venda relacionados (`ON DELETE CASCADE`)|

- Os scripts para criar e popular o banco de dados podem ser vistos no diretório [`sql`](./sql);

</details>

> 💡 Dica: Para outros detalhes (ex: [debugging](./FAQ.md#debugging) 🐞), dê uma olhada na [FAQ](./FAQ.md) ou procure a monitoria. Bom&nbsp;projeto!&nbsp;🚀

## Requisitos do projeto

### 01 - Crie endpoints para listar produtos

> 💡Dica: Comece criando pelo menos um teste do mocha para que os testes do avaliador funcionem.

- O endpoint para listar produtos deve ser acessível através do caminho `GET /products` e `GET /products/:id`;
- Através do caminho `GET /products`, todos os produtos devem ser retornados;
- Através do caminho `GET /products/:id`, apenas o produto com o `id` presente na URL deve ser retornado;
- O resultado da listagem deve ser **ordenado** de forma crescente pelo campo `id`;
- Crie testes que garantem a funcionalidade implementada;

<details>
<summary>O que será testado:</summary>

- **Será validado que é possível listar todos os produtos**

  Ao fazer uma requisição para `GET /products`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    }
    /* ... */
  ]
  ```

- **Será validado que não é possível listar um produto que não existe**

  Ao fazer uma requisição para `GET /products/:id`, se não existir um produto com o `id` presente na URL, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

  ```json
  { "message": "Product not found" }
  ```

- **Será validado que é possível listar um produto específico com sucesso**

  Ao fazer uma requisição para `GET /products/:id`, caso exista um produto com o `id` presente na URL, o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  {
    "id": 1,
    "name": "Martelo de Thor"
  }
  ```

- **Será validado que os testes estão cobrindo:**
  
    - Pelo menos 30% das linhas e possíveis mutações em código
    - Pelo menos 6 funções do código

</details>

<details>
<summary>💡Se quiser buscar os 100% de cobertura de testes, veja esta dica!</summary>

Se quiser incluir as rotas na sua cobertura de testes, lembre-se que testes unitários testam funções - e o _router_ só faz chamadas, ele não implementa nenhuma função. O teste mais adequado para ele é de integração - fique à vontade para fazê-los para complementar seus testes unitários!

</details>

### 02 - Crie endpoints para listar vendas

- O endpoint para listar vendas deve ser acessível através do caminho `GET /sales` e `GET /sales/:id`;
- Através do caminho `GET /sales`, todas as vendas devem ser retornadas;
- Através do caminho `GET /sales/:id`, apenas a venda com o `id` presente na URL deve ser retornada;
- O resultado deve ser **ordenado** de forma crescente pelo campo `saleId`, em caso de empate, **ordenar** também de forma crescente pelo campo `productId`;

<details>
<summary>O que será testado:</summary>

- **Será validado que é possível listar todas as vendas**

  Ao fazer uma requisição para `GET /sales`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  [
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }

    /* ... */
  ]
  ```

- **Será validado que não é possível listar uma venda que não existe**

  Ao fazer uma requisição para `GET /sales/:id`, se não existir uma venda com o `id` presente na URL, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

  ```json
  { "message": "Sale not found" }
  ```

- **Será validado que é possível listar uma venda específica com sucesso**

  Ao fazer uma requisição para `GET /sales/:id`, caso exista uma venda com o `id` presente na URL, o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  [
    {
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }

    /* ... */
  ]
  ```

- **Será validado que os testes estão cobrindo:**
  
    - Pelo menos 30% das linhas e possíveis mutações em código
    - Pelo menos 12 funções do código

</details>

> 💡 Dica: Você vai precisar buscar dados de mais de uma tabela para este requisito. Relembre o conteúdo sobre JOIN nas seções sobre MySQL caso necessário.

### 03 - Crie endpoint para cadastrar produtos

- O endpoint deve ser acessível através do caminho `POST /products`;
- Os produtos enviados devem ser salvos na tabela `products` do banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "name": "ProdutoX"
}
```

<details>
<summary>O que será testado:</summary>

- **Será validado que é possível cadastrar um produto com sucesso**

  Ao fazer uma requisição válida para `POST /products`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:

  ```json
  {
    "id": 4,
    "name": "ProdutoX"
  }
  ```

- **Será validado que os testes estão cobrindo:**
  
    - Pelo menos 30% das linhas e possíveis mutações em código
    - Pelo menos 15 funções do código

</details>

### 04 - Crie validações para o cadastro de produtos

- O endpoint de cadastro de produtos deve retornar mensagens de erro para requisições com dados inválidos;
- Lembre-se, o banco de dados não deve ser acessado nas validações iniciais do corpo da requisição;

<details>
<summary>O que será testado:</summary>

- **Será validado que não é possível cadastrar um produto sem o campo `name`**

  Se a requisição para `POST /products` não tiver o campo `name`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400` :

  ```json
  { "message": "\"name\" is required" }
  ```

- **Será validado que não é possível cadastrar um produto com o campo `name` menor que 5 caracteres**

  Se a requisição para `POST /products` não tiver `name` com pelo menos 5 caracteres, o resultado retornado deverá ser conforme exibido abaixo, com um status http `422`

  ```json
  { "message": "\"name\" length must be at least 5 characters long" }
  ```

- **Será validado que os testes estão cobrindo:**
  
    - Pelo menos 40% das linhas e possíveis mutações em código
    - Pelo menos 15 funções do código

</details>

<details>
<summary>💡 Dica: Para testar middlewares, você pode mockar a função next como no exemplo a seguir:</summary>

```js
// ...
const next = sinon.stub().returns(); // crie um stub
>
myMiddlewares.validateMiddleware(req, res, next); // passe o `next` para o middleware junto com o `req` e `res`
>
expect(next).to.have.been.calledWith(); // verifica se o `next` foi chamado pelo middleware
// ...
```

</details>

### 05 - Crie endpoint para cadastrar vendas

- O endpoint de vendas deve ser acessível através do caminho `POST /sales`;
- As vendas enviadas devem ser salvas nas tabelas `sales` e `sales_products` do banco de dados;
- Deve ser possível cadastrar a venda de vários produtos através da uma mesma requisição;
- O corpo da requisição deverá seguir o formato abaixo:

```json
[
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]
```

<details>
<summary>O que será testado:</summary>

- **Será validado que é possível cadastrar uma venda com sucesso**

  Ao fazer uma requisição válida para `POST /sales`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:

  ```json
  {
    "id": 3,
    "itemsSold": [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
  }
  ```

- **Será validado que os testes estão cobrindo:**
  
    - Pelo menos 40% das linhas e possíveis mutações em código
    - Pelo menos 18 funções do código

</details>

### 06 - Crie validações para o cadastro de vendas

- O endpoint de cadastro de vendas deve retornar mensagens de erro para requisições com dados inválidos;

<details>
<summary>O que será testado:</summary>

- **Será validado que não é possível cadastrar uma venda sem o campo `productId`**

  Se algum dos itens da requisição para `POST /sales` não tiver o campo `productId`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

  ```json
  { "message": "\"productId\" is required" }
  ```

- **Será validado que não é possível cadastrar uma venda sem o campo `quantity`**

  Se algum dos itens da requisição para `POST /sales` não tiver o campo `quantity`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400` :

  ```json
  { "message": "\"quantity\" is required" }
  ```

- **Será validado que não é possível cadastrar uma venda com o campo `quantity` menor ou igual a 0 (Zero)**

  Se a requisição para `POST /sales` tiver algum item em que o campo `quantity` seja menor ou igual a zero, o resultado retornado deverá ser conforme exibido abaixo, com um status http `422`

  ```json
  { "message": "\"quantity\" must be greater than or equal to 1" }
  ```

- **Será validado que não é possível cadastrar uma venda com o campo `productId` inexistente, em uma requisição com um único item**

  Se o campo `productId` do item da requisição para `POST /sales` não existir no banco de dados, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`

  ```json
  { "message": "Product not found" }
  ```

- **Será validado que não é possível cadastrar uma venda com o campo `productId` inexistente, em uma requisição com vários items**

  Se a requisição para `POST /sales` tiver algum item cujo campo `productId` não existe no banco de dados, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`

  ```json
  { "message": "Product not found" }
  ```

- **Será validado que os testes estão cobrindo:**
  
    - Pelo menos 50% das linhas e possíveis mutações em código
    - Pelo menos 18 funções do código

</details>

### 07 - Crie endpoint para atualizar um produto

- O endpoint deve ser acessível através do caminho `PUT /products/:id`;
- Apenas o produto com o `id` presente na URL deve ser atualizado;
- O corpo da requisição deve ser validado igual no cadastro;
- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "name": "Martelo do Batman"
}
```

<details>
<summary>O que será testado:</summary>

- **Será validado que não é possível alterar um produto sem o campo `name`**

  Se a requisição para `PUT /products/:id` não tiver o campo `name`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400` :

  ```json
  { "message": "\"name\" is required" }
  ```

- **Será validado que não é possível alterar um produto com o campo `name` menor que 5 caracteres**

  Se a requisição para `PUT /products/:id` não tiver `name` com pelo menos 5 caracteres, o resultado retornado deverá ser conforme exibido abaixo, com um status http `422`

  ```json
  { "message": "\"name\" length must be at least 5 characters long" }
  ```

- **Será validado que não é possível alterar um produto que não existe**
  
  Se a requisição para `PUT /products/:id` informar o `id` de um produto inexistente, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

    ```json
      { "message": "Product not found" }
    ```

- **Será validado que é possível alterar um produto com sucesso**

  Ao fazer uma requisição válida para `PUT /products/:id`, o resultado retornado deverá ser conforme exibido abaixo, com um status http`200`:

  ```json
  {
    "id": 1,
    "name": "Martelo do Batman"
  }
  ```

  Também será verificado que o produto foi alterado corretamente no banco de dados.

- **Será validado que os testes estão cobrindo:**
  
    - Pelo menos 50% das linhas e possíveis mutações em código
    - Pelo menos 21 funções do código

</details>

### 08 - Crie endpoint para deletar um produto

- O endpoint deve ser acessível através do caminho `DELETE /products/:id`;
- Apenas o produto com o `id` presente na URL deve ser deletado;

<details>
<summary>O que será testado:</summary>

- **Será validado que não é possível deletar um produto que não existe**

  Se a requisição para `DELETE /products/:id` informar o `id` de um produto inexistente, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

  ```json
    { "message": "Product not found" }
  ```

- **Será validado que é possível deletar um produto com sucesso**

  Ao fazer uma requisição válida para `DELETE /products/:id`, não deve ser retornada nenhuma resposta, apenas um status http `204`;

  Também será verificado que o produto foi removido corretamente no banco de dados.

- **Será validado que os testes estão cobrindo:**
  
    - Pelo menos 60% das linhas e possíveis mutações em código
    - Pelo menos 24 funções do código

</details>

## Requisitos Bônus

### 09 - Crie endpoint para deletar uma venda

- O endpoint deve ser acessível através do caminho `DELETE /sales/:id`;
- Apenas a venda com o `id` presente na URL deve ser deletada;

<details>
<summary>O que será testado:</summary>

- **Será validado que não é possível deletar uma venda que não existe**
  
  Se a requisição para `DELETE /sales/:id` informar o `id` de uma venda inexistente, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

  ```json
    { "message": "Sale not found" }
  ```

- **Será validado que é possível deletar uma venda com sucesso**

  Ao fazer uma requisição válida para `DELETE /sales/:id`, não deve ser retornada nenhuma resposta, apenas um status http `204`;

  Também será verificado que a venda foi removida corretamente no banco de dados.

- **Será validado que os testes estão cobrindo:**
  
    - Pelo menos 70% das linhas e possíveis mutações em código
    - Pelo menos 27 funções do código

</details>

### 10 - Crie endpoint para atualizar a quantidade de um produto em uma venda

- O endpoint deve ser acessível através do caminho `/sales/:saleId/products/:productId/quantity`;
- Apenas a quantidade do produto vendido com o `productId` na URL deve ser atualizada;
- O corpo da requisição receberá um valor `quantity`, que:
    - Deverá ser validado como o valor `quantity` para produtos recebidos na requisição de cadastro de venda;
    - Substituirá o valor atual de `quantity` do produto com o `productId` na venda;
- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "quantity": 20
}
```

<details>
<summary>O que será testado:</summary>

- **Será validado que não é possível realizar alterações em uma venda sem o campo `quantity`**

  Se a requisição para `PUT /sales/:saleId/products/:productId/quantity` não tiver o campo `quantity`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

  ```json
  { "message": "\"quantity\" is required" }
  ```

- **Será validado que não é possível realizar alterações em uma venda com o campo `quantity` menor ou igual a 0 (Zero)**

  Se a requisição para `PUT /sales/:saleId/products/:productId/quantity` tiver o campo `quantity` menor que zero, o resultado retornado deverá ser conforme exibido abaixo, com um status http `422`:

  ```json
  { "message": "\"quantity\" must be greater than or equal to 1" }
  ```

- **Será validado que não é possível realizar alterações em uma venda com `productId` inexistente**

  Se a requisição para `PUT /sales/:saleId/products/:productId/quantity` tiver o campo `productId` com um valor não existente no banco, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

  ```json
  { "message": "Product not found in sale" }
  ```

- **Será validado que não é possível alterar uma venda que não existe**

  Se a requisição para `PUT /sales/:saleId/products/:productId/quantity` informar o `saleId` de uma venda inexistente, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

  ```json
    { "message": "Sale not found" }
  ```

- **Será validado que é possível alterar a quantidade de um produto de uma venda com sucesso**

  Ao fazer uma requisição válida para `PUT /sales/:saleId/products/:productId/quantity`, o produto atualizado deverá ser retornado conforme exibido abaixo, com um status http `200`:

  ```json
  {
    "date": "2023-05-06T03:14:28.000Z",
    "productId": 2,
    "quantity": 20,
    "saleId": 1
  }
  ```

  Também será verificado que a quantidade do produto foi alterada corretamente no banco de dados.

- **Será validado que os testes estão cobrindo:**
  
    - Pelo menos 50% das linhas e possíveis mutações em código
    - Pelo menos 21 funções do código

</details>

### 11 - Crie endpoint para pesquisar produtos

- O endpoint deve ser acessível através do URL `GET /products/search`;
- O endpoint deve ser capaz de trazer todos os produtos no banco de dados contendo o valor da query `q` em `name`, se existirem;
- Sua aplicação deve ser capaz de retornar um array de produtos que contenham em seu nome o termo passado na URL;
- Sua aplicação deve ser capaz de retornar todos os produtos caso _query params_ `q` esteja vazia;
- Sua aplicação deve ser capaz de retornar um array vazio caso nenhum nome satisfaça a busca;
- O _query params_ da requisição deverá seguir o formato abaixo:

```text
  http://localhost:PORT/products/search?q=Martelo
```

<details>
<summary>O que será testado:</summary>

- **Será validado que é possível buscar um produto pelo `name`**

  Se a requisição para `GET /products/search` for feita com um _query params_ `q` cujo valor exista no atributo `name` de algum produto, o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  // GET /products/search?q=Martelo

  [
    {
      "id": 1,
      "name": "Martelo de Thor"
    }
  ]
  ```

- **Será validado que é possível buscar todos os produtos quando passa a busca vazia**

  Se a requisição para `GET /products/search` foi feita com um _query params_ `q` vazio, o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  // GET /products/search?q=

  [
    {
      "id": 1,
      "name": "Martelo de Thor",
    },
    {
      "id": 2,
      "name": "Traje de encolhimento",
    }
    /* ... */
  ]
  ```

- **Será validado que a busca retorna um array vazio quando não há produtos correspondentes**

  Se a requisição para `GET /products/search` for feita com um _query params_ `q` cujo valor não exista no atributo `name` de nenhum produto, o resultado retornado deverá ser um array vazio, com um status http `200`:

  ```json
  // GET /products/search?q=ProdutoInexistente

  []
  ```
  
- **Será validado que os testes estão cobrindo:**
  
    - Pelo menos 70% das linhas e possíveis mutações em código
    - Pelo menos 33 funções do código

</details>