### Exercicio 1

*a. Explique o que é uma chave estrangeira*
É uma coluna da tabela que recebe estritamente a chave primaria da coluna de outra tabela para eventualmente usar para relaciona-las. Como por exempo uma tabela de comentarios pode recenber a chave de um post

*b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*
FEITO

*c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114579-janaylla-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

O sql não encontrou o id referente por isso não pode adicionar uma nova linha, como eu espliquei na letra 'a' o valor precisa ser estritamente a chave de outra tabela

*d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*
FEITO

*e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114579-janaylla-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não é possivel apagar a linha porque ela possui uma dependecia.

### Exercicio 2

*a. Explique, com as suas palavras, essa tabela*
É uma tabela que relaciona as outras duas que possuimos até então

*b. Crie, ao menos, 6 relações nessa tabela* 
Feiro
*c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114579-janaylla-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

O sql não encontrou os ids referente por isso não pode adicionar uma nova linha, como eu espliquei na letra 'a' do Ex 1 o valor precisa ser estritamente a chave de outra tabela.

*d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114579-janaylla-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não é possivel apagar a linha porque ela possui dependecias.

### Exercicio 3

*a. Explique, com suas palavras, a query acima. O que é o operador `ON`?*
Relaciona as duas tabelas com base nas chaves primarias e estrangeiras

*b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
```sql
SELECT Movie.id, Movie.title, Rating.rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
### Exercicio 4
*a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário*
```sql
SELECT Movie.id, Movie.title, Rating.comment FROM Movie 
 JOIN Rating ON Movie.id = Rating.movie_id
JOIN ;
```

*b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator*
```sql
    SELECT Movie.id, Movie.title, Actor.id FROM Movie 
    JOIN MovieCast ON Movie.id = MovieCast.movie_id
    JOIN Actor on Actor.id = MovieCast.actor_id
;
```
*c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)*
```sql
SELECT Movie.id, Movie.title, avg(Rating.rate) as med FROM Movie 
left JOIN Rating ON Movie.id = Rating.movie_id group by Movie.id
```

### Exercicio 5

*a. Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?*
```sql
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
Porque a query esta relacionando 3 tabelas, e não apenas 2.

*b. Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query*
```sql
SELECT m.id as 'ID Movie', m.title, a.id as 'ID Actor', a.name  FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
*c. A query abaixo **deveria** ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.*
```sql
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
Tem uma virgula na primeira linha onde deveria esta: 'm.title' esta 'm,title'

*d. **Desafio:** Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)*
```sql

SELECT m.id as movie_id, m.title, a.id as actor_id, a.name,  r.rate,  r.comment FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
left JOIN Rating r ON r.movie_id = m.id
left JOIN Actor a ON a.id = mc.actor_id;
```

### Exercicio 6
*a. Que tipo de relação é essa?*
Relação n:m
*b. Explicite a query que você usou para criar a tabela*
```sql
CREATE TABLE Oscar (
	id VARCHAR(250) primary key,
	name VARCHAR(250) not null,
    date DATE not null
);

CREATE TABLE MovieOscar (
		movie_id VARCHAR(255),
		oscar_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (oscar_id) REFERENCES Oscar(id)
);

```
*c. Crie ao menos 2 óscar para cada um dos filmes* 
Feito (metate feito na verdade)

*d. Faça uma query que retorne todos os filmes e seus respectivos óscar*
```sql
SELECT m.title, m.synopsis, m.release_date, m.playing_limit_date, mo.date, o.name FROM Movie m
LEFT JOIN MovieOscar mo ON m.id = mo.movie_id
LEFT JOIN Oscar o ON o.id = mo.oscar_id
```