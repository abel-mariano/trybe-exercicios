🚀 Exercício
Vamos usar uma imagem disponível no nosso DockerHub conhecida como “figtrybe-artify” (que gera mensagens no formato ASCII no terminal)!

A ideia é deixarmos a mensagem para o “figtrybe-artify” parametrizável. Dessa forma, conseguiremos executar o comando:

Copiar
    docker container run --rm figtrybe-artify "#Go Trybers"
E ter a seguinte saída no terminal:

Copiar
    _  _    ____         _____           _                   
  _| || |_ / ___| ___   |_   _| __ _   _| |__   ___ _ __ ___ 
 |_  ..  _| |  _ / _ \    | || '__| | | | '_ \ / _ \ '__/ __|
 |_      _| |_| | (_) |   | || |  | |_| | |_) |  __/ |  \__ \
   |_||_|  \____|\___/    |_||_|   \__, |_.__/ \___|_|  |___/
                                   |___/                     
Para isso:

Crie um Dockerfile utilizando a imagem betrybe/figtrybe-artify.

Defina um ENTRYPOINT para a execução do comando.

Observe que o executável figtrybe-artify está nos caminhos "node", "app.js";
Lembre-se que com ele, diferente do CMD, o comando não poderá ser sobrescrito com o docker run, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.
Utilize o CMD para definir uma mensagem padrão.

Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.

Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -f Ghost para adicionar a fonte Ghost e então executar algo como docker container run figtrybe-artify -f Ghost "VQV TRYBE", para exibir a mensagem com uma nova fonte como o exemplo abaixo:
