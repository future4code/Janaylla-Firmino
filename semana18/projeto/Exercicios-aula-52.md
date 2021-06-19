### Execicio 1

*a. O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*
O sal é um valor aleatório e deve ser diferente para cada cálculo, portanto, o resultado dificilmente deve ser o mesmo, mesmo para senhas iguais. 

*b.  Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs.*
Feito

*c. Agora, crie a função que verifique se uma string é correspondente a um hash, use a função compare do bcryptjs*
Feito


### Exercicio 2

*a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
Cadastro, pois este é feito antes do login

*b. Faça a alteração do primeiro endpoint*
Feito

*c. Faça a alteração do segundo endpoint*
Feito

*d. No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*
Não, porque não guardamos a senha no token.


### Exercicio 3

*a. Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*
Feito

*b. Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*
Feito

*c. Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*
Feito

*d. Altere o login para criar o token com o `role` do usuário*
Feito