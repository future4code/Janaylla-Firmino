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