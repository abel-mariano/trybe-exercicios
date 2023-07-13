Para realizar os exercícios 1 a 7, restaure o banco de dados pixar abaixo.

DROP SCHEMA IF EXISTS pixar;
CREATE SCHEMA pixar;
USE pixar;

CREATE TABLE movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);

CREATE TABLE box_office (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);

INSERT INTO movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('Vida de inseto', 'Andrew Stanton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Carros', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Valente', 'Brenda Chapman', 2012, 98);


INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);


Exercício 1: Insira os filmes da Pixar abaixo na tabela movies:

Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.
➡️ USE pixar;
INSERT INTO movies(title, director, year, length_minutes)
  VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107),
         ('Os Incríveis', 'Brad Bird', 2004, 116),
         ('WALL-E', 'Pete Docter', 2008, 104);

Exercício 2: Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela box_office.
➡️ INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUE (9, 6.8, 450000000, 370000000);

Exercício 3: O diretor do filme “Procurando Nemo” está incorreto, na verdade ele foi dirigido por “Andrew Stanton”. Corrija esse dado utilizando o UPDATE.
➡️ SET SQL_SAFE_UPDATES = 0;

UPDATE movies
SET director = 'Andrew Stanton'
WHERE title = 'Procurando Nemo';

Exercício 4: O título do filme “Ratatouille” está escrito de forma incorreta na tabela movies, além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE.
➡️ UPDATE movies
SET title = 'Ratatouille', year = 2007
WHERE title = 'ratatui';

Exercício 5: Insira as novas classificações abaixo na tabela box_office, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela movies:
Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.
➡️ INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUES (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (11, 9.9, 290000000, 280000000);

Exercício 6: Exclua da tabela movies o filme “WALL-E”. P.S.: Lembrando que existe uma relação de Primary key-Foreign Key, portanto devemos excluir primeiro a referência da tabela box_office, para depois excluir da tabela movies.
➡️ DELETE FROM box_office
WHERE movie_id = 11; -- este é o id do filme WALL-E

DELETE FROM movies
WHERE title = 'WALL-E';

Exercício 7: Exclua da tabela movies todos os filmes dirigidos por “Andrew Stanton”.
➡️ -- primeiro é utilizada essa query para selecionar os ids dos filmes a serem excluídos (2 e 9)
SELECT id FROM movies
WHERE director = 'Andrew Stanton';

DELETE FROM box_office
WHERE movie_id IN (2, 9);

DELETE FROM movies
WHERE director = 'Andrew Stanton';
