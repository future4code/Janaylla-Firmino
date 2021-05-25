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
