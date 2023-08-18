# TrybeCar API

Uma API para gerenciamento de corridas, pessoas motoristas e passageiras.

Essa API é usada como exemplo didático para a seção de Arquitetura de Software do Curso de Desenvolvimento Web da Trybe.

<details>
  <summary>Branchs no repositório</summary>

  Cada dia de conteúdo possui 3 _branches_ no seguinte padrão:

- **n-begin**: Versão do projeto que é o ponto de partida do conteúdo do dia.
- **n-content**: Versão do projeto que inclui tudo que foi implementado no conteúdo e é o ponto de partida para aula ao vivo.
- **n-live-lecture**: Versão do projeto que inclui tudo que foi implementado no conteúdo e a aula ao vivo e é o ponto de partida para o exercício do dia.

## Mapa das branches

### Dia 1

  1. [1-begin](https://github.com/tryber/trybecar/tree/1-begin)
  2. [1-content](https://github.com/tryber/trybecar/tree/1-content)
  3. [1-live-lecture](https://github.com/tryber/trybecar/tree/1-live-lecture)

### Dia 2
  
  1. [2-begin](https://github.com/tryber/trybecar/tree/2-begin)
  2. [2-content](https://github.com/tryber/trybecar/tree/2-content)
  3. [2-live-lecture](https://github.com/tryber/trybecar/tree/2-live-lecture)

### Dia 3
  
  1. [3-begin](https://github.com/tryber/trybecar/tree/3-begin)
  2. [3-content](https://github.com/tryber/trybecar/tree/3-content)
  3. [3-live-lecture](https://github.com/tryber/trybecar/tree/3-live-lecture)

### Dia 4
  
  1. [4-begin](https://github.com/tryber/trybecar/tree/4-begin)
  2. [4-content](https://github.com/tryber/trybecar/tree/4-content)
  3. [4-live-lecture](https://github.com/tryber/trybecar/tree/4-live-lecture)

### Dia 5

  1. [5-begin](https://github.com/tryber/trybecar/tree/5-begin)
  2. [5-content](https://github.com/tryber/trybecar/tree/5-content)
  3. [5-live-lecture](https://github.com/tryber/trybecar/tree/5-live-lecture)

  > **De olho na dica 👀:** Caso queira ver a versão completa da aplicação, utilize a branch [`5-live-lecture`](https://github.com/tryber/trybecar/tree/5-live-lecture).
</details>

## Rodando a aplicação inicial via Docker

- Clone o repositório e acesse a branch respectiva do dia.

```bash
git clone git@github.com:tryber/trybecar.git
cd trybecar
git checkout <branch> # Use a branch do respectivo dia.
```

- Inicie os contêineres via Docker Compose
  
```bash
docker-compose up -d
```

- Conecte no banco de dados MySQL do contêiner `trybecar_db` exposto na porta `33060` usando algum cliente SQL (como o [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) ou a extensão [MySQL](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-mysql-client2) para o VSCode)
  - Utilize o usuário `root` e a senha `root`
  - Execute o script `script.sql` para criar as tabelas e alguns dados iniciais.
  - Você pode usar esse script a qualquer momento para recriar as tabelas se necessário.

- Acesse o `bash` dentro do contêiner Node `trybecar`, instale as dependências e inicie o servidor

```bash
docker exec -it trybecar bash
npm install
npm run debug
```

## Lista de endpoints

> Dica: Há uma coleção dos endpoints em formato JSON para importação na extensão [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) do VSCode no arquivo `thunder-trybecar.json`

<details>
  <summary>Como importar a coleção no Thunder Client</summary>

  1. Abra a aba da extensão Thunder Client
  2. CLique na aba Collections
  3. Clique no menu de opções
  4. Clique em Import
  5. Escolha o arquivo `thunder-trybecar.json`
  6. Clique em OK
  
  <img alt="Imagem da tela de importação do Thunder Client" src="./thunder-collection.png">
</details>

- No dia 1 iremos implementar os seguintes endpoints:
  - GET `/passengers`
  - GET `/passengers/:passengerId`
  - POST `/passengers`
  - PUT `/passengers/:passengerId`
  - DELETE `/passengers/:passengerId`
- Ao longo dos dias 2, 4 e 5 utilizaremos a arquitetura em camadas para refatorar os seguintes endpoints:
  - POST `/passengers/:passengerId/request/travel`
  - GET `/drivers/open/travels`
  - PATCH `/drivers/:driverId/travels/:travelId/`
- No dia 3 implementaremos os seguintes endpoints:
  - POST `/cars`
  - GET `/cars`
  - GET `/cars/:carId`
  - PUT `/cars/:carId`
- Nos exercícios da seção utilizaremos a arquitetura em camadas para implementar os seguintes endpoints.
  - DELETE `/passengers`
  - GET `/drivers`
  - GET `/drivers/:id`
  - POST `/drivers`

Os endpoints são apresentados com mais detalhes no conteúdo e exercícios.