// EXERCÍCIO 1

// Explique o que o código faz. Qual o teste que ele realiza?
// Ele pede um número ao usuario, depois tranforma a string é digitada em uma variavel do tipo number e verifica o resto da divisão desse numero por 2
// Obs 1: caso o usuario digite caracteres que não sejam números a variavel a conversão retorna NaN(not a number)
// Obs 2: caso o usuario não digite nada, isso é interpretado como 0.

//Para que tipos de números ele imprime no console "Passou no teste"?
// Para número pares ou seja divisiveis por 2

//Para que tipos de números a mensagem é "Não passou no teste"?
// Para número impares ou seja indivisiveis por 2

// EXERCÍCIO 2

// a. Para que serve o código acima?
// Para mostrar o preço da preço da fruta escolhida pelo usuário

// b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta Maçã é R$ 2.25

// c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// O preço da fruta Pêra é R$  5

// EXERCÍCIO 3

// a. O que a primeira linha está fazendo?
// Pedindo um numero para o usuario e tranformando a variavel string recebida em um number

// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// "Esse número passou no teste".
// Não mostrara nada

// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim. Porque a variavel mensagem só existe dentro do bloco do if. Fora dele ele não existe e o console aprensenta o erro como variavel não definida.

// EXERCÍCIO 4

console.log("--EXERCÍCIO 4---");
let idade = Number(prompt("Qual a sua idade?"));

if(idade >= 18){
    console.log("Você pode dirigir");
}
else if(idade >= 0 && idade < 18){
    console.log("Você não pode dirigir");
}
else{
    console.log("DIGITE UM VALOR VÁLIDO");
}

// EXERCÍCIO 5

console.log("--EXERCÍCIO 5---");
let Turno = prompt("Em que turno você estuda? Digite: M (matutino) ou V (Vespertino) ou N (Noturno)");

if(Turno === "M"){
    console.log("Bom dia!");
}
else if(Turno === "V"){
    console.log("Boa tarde!");
}
else if(Turno === "N"){
    console.log("Boa noite!");
}
else{
    console.log("DIGITE UM VALOR VÁLIDO");
}

// EXERCÍCIO 6

console.log("--EXERCÍCIO 6---");
switch(Turno){
    case "M":
        console.log("Bom dia!");
    break;
    case "V":
        console.log("Boa tarde!");
    break;
    case "N":
        console.log("Boa noite!");
    break;
    default:
        console.log("DIGITE UM VALOR VÁLIDO");
    break;
}

// EXERCÍCIO 7 e DESAFIO 1

console.log("--EXERCÍCIO 7 e DESAFIO 1---");
let generoFilme = prompt("Qual o gênero de filme que vocês vão assistir");
let precoIngresso = Number(prompt("Qual o preço do ingresso?"));

if(generoFilme === "fantasia" && precoIngresso < 15){
    let snack = prompt("Que snack você vai comprar (pipoca, chocolate, doces, etc)?");

    console.log("Bom filme!");
    console.log("... com", snack);
}
else{
    console.log("Escolha outro filme :(");
}
// DESAFIO 2

console.log("--DESAFIO 2---");
let nomeCompleto = prompt("Digite seu nome completo?");
let tipoJogo = prompt("Qual tipo de jogo que deseja assitir (IN - internacional ou DO - doméstico)");
let etapaJogo = prompt("Qual Etapa do jogo que deseja assitir (SF - semi-final, DT - decisão de terceiro lugar ou FI - final)");
let categoria = prompt("Qual categoria do jogo que deseja assitir 1, 2, 3 ou 4?");
let quantidade = Number(prompt("Quantidade de ingressos que deseja comprar?"));

let valorUnidade = 0;
let etapaJogoExtenso;
let valorUnidadeMoeda;
let valorTodalMoeda;
let erro = false;
switch (etapaJogo) {
    case "SF":
        etapaJogoExtenso = "semi-final";
        switch (categoria) {
            case "1":
                valorUnidade = 1320;
                break;
            case "2":
                valorUnidade = 880;
                break;
            case "3":
                valorUnidade = 550;
                break;
            case "4":
                valorUnidade = 220;
                break;
            default:
                erro = true;
                console.log("VALOR INVALIDO PARA CATEGORIA");

        }
        break;

    case "DT":
        etapaJogoExtenso = "decisão de terceiro lugar";
        switch (categoria) {
            case "1":
                valorUnidade = 660;
                break;
            case "2":
                valorUnidade = 440;
                break;
            case "3":
                valorUnidade = 330;
                break;
            case "4":
                valorUnidade = 170;
                break;
            default:
                erro = true;
                console.log("VALOR INVALIDO PARA CATEGORIA");

        }
        break;
    case "FI":
        etapaJogoExtenso = "final";
        switch (categoria) {
            case "1":
                valorUnidade = 1980;
                break;
            case "2":
                valorUnidade = 1320;
                break;
            case "3":
                valorUnidade = 880;
                break;
            case "4":
                valorUnidade = 330;
                break;
            default:
                erro = true;
                console.log("VALOR INVALIDO PARA CATEGORIA");

        }
        break;
    default:
        erro = true;
        console.log("VALOR INVALIDO PARA ETAPA DO JOGO");
        break;
}
if (quantidade > 0) {
    switch (tipoJogo) {
        case "IN":
            valorUnidadeMoeda = "U$ " + valorUnidade / 4.1;
            valorTodalMoeda = "U$ " + valorUnidade / 4.1 * quantidade;
            break;
        case "DO":
            valorUnidadeMoeda = "R$ " + valorUnidade;
            valorTodalMoeda = "R$ " + valorUnidade * quantidade;
            break;
    }
}
else {
    erro = true;
}
if (!erro) {
    console.log("---Dados da compra---");
    console.log("Nome do cliente:", nomeCompleto);
    console.log("Tipo de jogo:", tipoJogo);
    console.log("Etapa do jogo:", etapaJogoExtenso);
    console.log("Categoria: " + categoria);
    console.log("---Valores---");
    console.log("Valor do ingresso:", valorUnidadeMoeda);
    console.log("Valor total:", valorTodalMoeda);
}
else{
    console.log("---ALGUM DADO FOI DIGITADO INCORRETAMENTE, RECARREGUE E TENTE NOVAMENTE---");
}