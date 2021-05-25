### Exercicio 1
*a.*
```sql
ALTER TABLE Actor DROP COLUMN salary;
```
Apagaria a coluna salary

*b.*

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
Trocaria o nome da coluna gender por sexo

*c.* 

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
Aumentaria a capacipade de caracteres da coluna gender

*d. Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres*

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercicio 2

*a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*
```sql
UPDATE Actor
SET name = "Moacyr Franco", birth_date="2001-06-05"
WHERE id = "003"
```

*b. Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*
```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```
```sql
UPDATE Actor
SET name ="JULIANA PAES"
WHERE name = "Juliana Paes";
```

*c. Escreva uma query que atualize todas as informações do ator com o id `005`*
```sql
UPDATE Actor
SET 
id='003', name='Teste', salary=200000, birth_date='2020-02-02', gender='male'
WHERE name = "Juliana Paes";
```

*d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Como não froi encontrada nada com a condição especificada nenhuma linha foi alterada.

Error Code: 1054. Unknown column 'naame' in 'field list'
Não foi encontrada a coluna que eu pedi para alterar.

### Exercicio 3
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```
```sql
DELETE FROM Actor WHERE gender = "male" and salary=1000000
```

### Exercicio 4
*a. Escreva uma query que pegue o maior salário de todos os atores e atrizes*
```sql
SELECT MAX(salary) FROM Actor;
```
*b. Escreva uma query que pegue o menor salário das atrizes*
```sql
SELECT MAX(salary) FROM Actor WHERE gender = "female";
```
*c. Escreva uma query que pegue a quantidade de atrizes*
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

*d. Escreva uma query que pegue a soma de todos os salários*
```sql
SELECT SUM(salary) FROM Actor;
```

### Exercicio 5
*a. Releia a última query. Teste-a. Explique o resultado com as suas palavras*
Soma a quantidade de cada gender o agrupando por tipo

*b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*
```sql
SELECT id, name FROM Actor
ORDER BY name DESC
```

*c. Faça uma query que retorne todos os atores ordenados pelo salário*
```sql
SELECT * FROM Actor
ORDER BY salary
```
*d. Faça uma query que retorne os atores com os três maiores salarios*
```sql
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 2;
```

*e. Faça uma query que retorne a média de salário por gênero*
```sql
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```
### Exercicio 6
*a. Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 
```sql
ALTER TABLE Movies ADD playing_limit_date DATE;
```
*b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*
```sql
ALTER TABLE Movies CHANGE rating rating FLOAT;
```
*c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*
```sql
UPDATE Movies
SET	playing_limit_date = "2020-12-31"
WHERE id = "001"

UPDATE Movies
SET	playing_limit_date = "2021-05-23"
WHERE id = "001"
```
*d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*
```sql
DELETE FROM Movie WHERE id = "001"
```
### Exercicio 7
*a. Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?*
1
*b. Qual a média das avaliações dos filmes?*
8.5
*c. Qual a quantidade de filmes em cartaz?*
1
*d. Qual a quantidade de filmes que ainda irão lançar?*
0
*e. Qual a maior nota dos filmes?*
10
*f. Qual a menor nota dos filmes?*
7
### Exercicio 8

*a. Retorne todos os filmes em ordem alfabética*
```sql
SELECT * FROM Movies 
ORDER BY title;
```
*b. Retorne os 5 primerios filmes em ordem descrente alfabética* 
```sql
SELECT * FROM Movies 
ORDER BY title DESC
LIMIT 5;
```
*c. Retorne os 3 filmes mais recentes em cartaz*
```sql
SELECT * FROM Movies 
ORDER BY playing_limit_date DESC
LIMIT 3;
```
*d. Retorne os 3 filmes melhor avalidos*
```sql
SELECT * FROM Movies 
ORDER BY rating DESC
LIMIT 3;
```