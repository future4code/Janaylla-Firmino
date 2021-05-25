### Exercício 1

*a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*
    id VARCHAR(255) PRIMARY KEY - Uma coluna que é o identificador das linhas, do tipo varchar (que se assemelharia a uma string limitada), e por ser uma primary key ela é também NOT NUll e UNIQUE
    name VARCHAR (255) NOT NULL, uma coluna chamada name, do tipo varchar e não pode ser nula
    salary FLOAT NOT NULL, uma coluna chamada salario do tipo float que aceita casas decimais e não pode ser nula
    birth_date DATE NOT NULL, uma coluna chamada date do tipo date que aceita apenas strings de datas validas no formato yyyy-mm-dd e não pode ser nula
    gender VARCHAR(6) NOT NULL uma coluna chamada gender que aceita até 6 caracteres de e não pode ser nula

*b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*
    O primeiro exibiu as databases existentes, e o segundo as tabelas aninhadas por databases

*c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*
    Exibiu uma descrição da tabela, com nome, tipo, se pode ser nulo, valor padão caso vazio, se é chave primaria.

### Exercício 2

*a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
    "002", 
    "Glória Pires",
    1200000,
    "1963-08-23", 
    "female"
    );

*b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*
Duplicate entry '002' for key 'PRIMARY'
Entrada duplicada '002' para a chave 'PRIMARY'

Porque a coluna de id, é uma chave primaria, logo é unique e não aceita valores duplicados

*Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

*c*
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

Error Code: 1136. Column count doesn't match value count at row 1
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

É especificado 3 colunas e é inserido 5 valores.

*d*
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

Error Code: 1364. Field 'name' doesn't have a default value
Código de erro: 1364. O campo 'nome' não tem um valor padrão

O campo nome foi definido como not null, e não foi colocado valor para ele na inserção de dados, por isso retorna o erro.

*e*
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

O valor da data não corresponde ao esperado, o valor precisa estar entre aspas

### Exercicio 3
*a. Escreva uma query que retorne todas as informações das atrizes*
SELECT * from Actor WHERE gender = "female";

*b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*
SELECT * from Actor WHERE name = 'Tony Ramos';

*c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*
SELECT * from Actor WHERE gender = 'invalid';
Não retornou nenhuma linha porque nenhuma corresponde ao filtro, ou sejá até enntão não existem linhas com valores invalidos.

*d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*
SELECT id, name, salary from Actor WHERE salary <= 500000;

*e.* T*ente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*
SELECT id, nome from Actor WHERE id = "002"

Error Code: 1054. Unknown column 'nome' in 'field list'
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'

Não foi encontrada a tabela com a coluna 'nome', é só trocar 'nome' para 'name' que é uma coluna que existe:

SELECT id, nome from Actor WHERE id = "002"


### Exercicio 4
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
*a. Explique com as suas palavras a query acima*
Selecione todos as colunas da tabela de atores que possuem o nome começando com a letra 'A' ou que começando com 'J', que granham mais que R$ 300.000
*b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*
SELECT * FROM Actor
WHERE name NOT LIKE "J%" AND salary > 350000;

*c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%" 

*d. Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" or name LIKE "%A%" OR name LIKE "%a%") 
and (salary between 350000 and 900000)


### Exercicio 5
INSERT INTO Movies (id, name, sipnosi, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
),
(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
),
(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-01", 
  8
),
(
  "004", 
 "Que Horas Ela Volta?",
  "A pernambucana Val se mudou para São Paulo com o intuito de proporcionar melhores condições de vida para a filha, Jéssica. Anos depois, a garota lhe telefona, dizendo que quer ir para a cidade prestar vestibular. Os chefes de Val recebem a menina de braços abertos, porém o seu comportamento complica as relações na casa.",
  "2017-11-01", 
  9
);

select * from Movies


### Exercicio 6
Escreva uma query que:

a. Retorne o id, título e avaliação a partir de um id específico;
select  id, title, rating from Movies where id = '001';

b. Retorne um filme a partir de um nome específico;
select  * from Movies where title = 'Que Horas Ela Volta?';

c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`
select  id, title, synopsis from Movies where rating >=7;


### Exercicio 7
Escreva uma query que:

a. Retorna um filme cujo título contenha a palavra `vida`
SELECT * FROM Movies
WHERE title LIKE "%vida%";

b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.
SELECT * FROM Movies
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%"

c. Procure por todos os filmes que já tenham lançado
SELECT * FROM Movies
WHERE release_date < "2020-05-04";

d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.
SELECT * FROM Movies
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;