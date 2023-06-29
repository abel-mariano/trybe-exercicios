# Boas-vindas ao repositório do projeto de Lições Aprendidas!

<br />

# Entregáveis
  
<details>
<summary><strong>🧑‍💻 O que deverá ser desenvolvido</strong></summary><br />

Você vai desenvolver um site que contenha uma série de informações sobre o que você aprendeu aqui na Trybe ao longo dos últimos três blocos. O seu site deverá estar com elementos posicionados e estilizados e, além disso, deverá conter semântica apropriada para que seja acessível e melhor ranqueado.

💡Veja no exemplo a seguir como pode ser a aparência do projeto depois de pronto. Lembre-se de que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar todas as pessoas!

![exemplo](./exemplo.png)

<br />

</details>

<br />

# Orientações
  
<details>
<summary><strong>🏪 Desenvolvimento </strong></summary><br />

Você deve desenvolver uma página HTML estilizada com CSS.

Através desta aplicação, será possível realizar a construção de código HTML, posicionamento e estilização CSS.

</details>

<details>
<summary><strong>🔗 Links auxiliares para o desenvolvimento do projeto</strong></summary><br />

- Lembrem-se de que como pessoas desenvolvedoras devemos fazer pesquisas e garimpar resultados para auxiliar no entendimento de um assunto. Assim, para solucionar os requisitos do projeto é inevitável e estimulado que pesquisas sejam feitas nas mais variadas fontes (course, vídeos do course, google, youtube, etc) sempre tomando cuidado para utilizar fontes "confiáveis" nas pesquisas da Internet, como por exemplo:
  - [Javascript.com](http://javascript.com/)
  - [W3Schools](https://www.w3schools.com/js/default.asp)
  - [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

</details>

<br />
  
# Requisitos do projeto

## 1. Adicione uma cor de fundo específica para a página

<details>

<summary>A página deve possuir uma cor de fundo <code>rgb(253, 251, 251)</code>
</summary><br/>

**O que será testado:**

- A página deve possuir cor de fundo: `rgb(253, 251, 251)`.

</details>

## 2. Adicione uma barra superior com um título

<details>

<summary>Essa barra superior deve possuir o <code>id</code> igual a <code>cabecalho</code> e deve ser fixa no topo da página com a propriedade <code>top</code> tendo <code>0</code>. O título deve estar dentro da barra e ser um elemento <code>h1</code> com <code>id</code> igual a <code>titulo</code>.
</summary><br/>

**De olho na dica 👀:** Para saber mais sobre posicionamento de elementos no CSS, consulte a documentação [aqui](https://www.w3schools.com/css/css_positioning.asp);<br/>

**O que será testado:**

- A barra deve possuir o ID `cabecalho`;
- A barra superior deve ser fixa no topo da página;
- A barra deve ter a propriedade `top` tendo o valor `0`;
- O título deve estar dentro da barra e possuir o ID `titulo`, além de ser uma tag `h1`.

</details>

## 3. Adicione uma foto sua à página

<details>

<summary>A foto deve ser inserida utilizando uma tag <code>img</code> com o ID <code>minha_foto</code>.
</summary><br/>

**O que será testado:**

- A foto deve ser uma tag `img` e possuir o ID `minha_foto`.

</details>

## 4. Adicione uma lista de lições aprendidas à página

<details>

<summary>A lista deve possuir <strong>10</strong> itens, ser numerada e possuir o ID <code>licoes_aprendidas</code>.
</summary><br/>

**O que será testado:**

- A lista deve ser numerada;

- A lista deve possuir o ID `licoes_aprendidas`;

- A lista deve possuir 10 itens.

</details>

## 5. Crie uma lista de lições que ainda deseja aprender para a página

<details>

<summary>A lista deve possuir <strong>10</strong> itens, não ser numerada e possuir o ID <code>licoes_a_aprender</code>.
</summary><br/>

**O que será testado:**

- A lista não deve ser numerada;
  
- A lista deve possuir o ID `licoes_a_aprender`;

- A lista deve possuir 10 itens.

</details>

## 6. Adicione um rodapé para a página

<details>

<summary>O rodapé deve utilizar a tag <strong>footer</strong> e possuir o ID <code>rodape</code>.
</summary><br/>

**O que será testado:**

- O rodapé deve possuir a tag `footer`;

- O rodapé deve possuir o ID `rodape`.

</details>

## 7. Insira pelo menos um link externo na página

<details>

<summary>O link deve redirecionar a pessoa usuária para uma nova aba do navegador.
</summary><br/>

**De olho na dica 👀:** Leia mais sobre redirecionamento de aba [aqui](https://www.horadecodar.com.br/2019/11/21/como-fazer-para-o-link-abrir-em-nova-aba-tag-a-do-html/)

**O que será testado:**

- O link deve ser aberto em nova aba no navegador.

</details>

## 8. Crie um artigo sobre o seu aprendizado

<details>

<summary>O artigo deverá ser uma tag html <code>article</code> e deve possuir mais de 300 <strong>caracteres</strong> e menos de 600.
</summary><br/>

**O que será testado:**

- O artigo deve possuir a tag `article`;
- O artigo deve ter mais de 300 caracteres e menos de 600.

</details>

## 9. Crie uma tag html `aside` que contenha uma breve descrição sobre você

<details>

<summary>A tag <code>aside</code> deverá possuir mais de 100 <strong>caracteres</strong> e menos de 300.
</summary><br/>

Lembre-se que tudo dentro da tag `aside` será contabilizado como caractere.

**O que será testado:**

- A tag `aside` deve ser utilizada;
- A sua descrição deve ter mais que 100 caracteres e menos que 300.


</details>

## 10. Aplique elementos HTML de acordo com o sentido e propósito de cada um deles

<details>

<summary>A sua página deve conter os seguintes elementos: <code>article</code>, <code>header</code>, <code>aside</code> e <code>footer</code>.
</summary><br/>

**O que será testado:**

- A página deve possuir um elemento `article`;
- A página deve possuir um elemento `header`;
- A página deve possuir um elemento `aside`;
- A página deve possuir um elemento `footer`.

</details>

## 11. Teste a semântica da sua página usando o site [CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)

<details>

<summary>Teste se a semântica da sua página está aprovada pelo site <a href="https://squizlabs.github.io/HTML_CodeSniffer/">CodeSniffer</a>.
</summary><br/>

**O que será testado:**

- A sua página deve passar com `0 errors` na verificação de semântica do site [CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/).

</details>

---
 
# Requisitos Bônus

## 12. Adicione uma tabela à página

<details>

<summary>A página deve possuir uma tabela.
</summary><br/>

**De olho na dica 👀:** Você pode ler mais sobre tabelas no HTML [aqui](https://www.w3schools.com/html/html_tables.asp).

**O que será testado:**

- A página deve possuir um elemento `<table>`.

</details>

## 13. Utilize o Box model

<details>

<summary>Altere <code>margin</code>, <code>padding</code> e <code>border</code> dos elementos para ver, na prática, como esses atributos influenciam e melhoram a visualização dos componentes.
</summary><br/>

**O que será testado:**

- Algum elemento deve ter o atributo `margin` modificado;
- Algum elemento deve ter o atributo `padding` modificado;
- Algum elemento deve ter o atributo `border` modificado.

</details>

## 14. Altere atributos relacionados às fontes

<details>

<summary>Modifique o estilo da sua tipografia alterando o tamanho de letra, a cor, o espaçamento entre as linhas e a <code>font-family</code>.
</summary><br/>

**O que será testado:**

- O estilo da tipografia deve ter o tamanho da letra alterado;
- O estilo da tipografia deve ter a cor da letra alterada;
- O estilo da tipografia deve ter o espaçamento entre as linhas alterado;
- O estilo da tipografia deve ter o atributo `font-family`.

</details>

## 15. Posicione a tag `article` e a tag `aside` uma ao lado do outra

<details>

<summary>Adicione ao elemento posicionado no lado esquerdo a classe <code>lado-esquerdo</code> e ao elemento posicionado no lado direito a classe <code>lado-direito</code>.
</summary><br/>

**O que será testado:**

- O elemento posicionado à esquerda deve utilizar a classe `lado-esquerdo`;
- O elemento posicionado à direita deve utilizar a classe `lado-direito`;
- Os elementos com as classes `lado-direito` e `lado-esquerdo` estão posicionados corretamente.

</details>

---