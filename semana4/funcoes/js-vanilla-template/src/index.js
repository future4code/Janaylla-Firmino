// Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa

// Exercícios de interpretação de código

// EXERCÍCIO 1

// a. O que vai ser impresso no console?
// 10
// 50

// b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// A função retornaria os valores 10 e 50, entretanto não exibiria nada.

// EXERCÍCIO 2

// a. Explicite quais são as saídas impressas no console
// os indices do array que são menores que 2 ou seja o indice 0 e 1
// Darvas
// Caio

// b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
// Amanda
// Caio

// EXERCÍCIO 3

// O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!
// Ele recebe um array e retorna outro array com a quadrado dos pares do que recebeu.
// quadradoDosPares

// Exercícios de escrita de código

// EXERCÍCIO 4

// Escreva as funções explicadas abaixo:

// a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
console.log("\nEXERCÍCIO 4 - a");
const sobreMim = () => {
    console.log("Eu sou Janaylla, tenho 19 anos, moro na Bahia e sou estudante.");
}

sobreMim();

// b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
console.log("EXERCÍCIO 4 - b");
const sobreMimParametros = (nome, idade, estado, estudante) => {
	if(estudante)
		estudante = "sou";
	
	else
		estudante = "não sou";
    console.log("Eu sou "+nome+", tenho "+idade+" anos, moro na "+estado+" e "+estudante+" estudante.");
}

sobreMimParametros("Janaylla", 19, "Bahia", true);

// EXERCÍCIO 5
// Escreva as funções explicadas abaixo:

// a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
console.log("\nEXERCÍCIO 5 - a");
const soma = (n1, n2) => {
    return n1 + n2;
}
console.log(soma(6,32));

// b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
console.log("EXERCÍCIO 5 - b");
const maiorIgual = (n1, n2) => {
    return n1 >= n2;
}

console.log(maiorIgual(6,32));

// c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso)
console.log("EXERCÍCIO 5 - c");
const repita10 = (mensagem) => {
    for(let i=0; i<10; i++){
        console.log(mensagem);
    }
}
repita10("OIIII");


// EXERCÍCIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele
console.log("\nEXERCÍCIO 6 - a");
const tamanhoDoArray = (arrayF) => {
    return arrayF.length;
}
console.log(tamanhoDoArray(array));

// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
console.log("EXERCÍCIO 6 - b");
const ePar = (numero) => {
    return numero % 2 == 0;
}
console.log(ePar(array[0]));
// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele
console.log("EXERCÍCIO 6 - c");
const quantosPares = (arrayF) => {
    novoArray = [];
    for(let i=0; i<arrayF.length; i++){
        if(arrayF[i] % 2 == 0)
            novoArray.push(arrayF[i]);
    }
    return novoArray.length;
}
console.log(quantosPares(array));

// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par
console.log("EXERCÍCIO 6 - d");

const quantosPares2 = (arrayF) => {
    novoArray = [];
    for(let i=0; i<arrayF.length; i++){
        if(ePar(arrayF[i]))
            novoArray.push(arrayF[i]);
    }
    return novoArray.length;
}
console.log(quantosPares2(array));

//DESAFIO
console.log("\nDESAFIOS\n");
// EXERCÍCIO 1

// Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções:

console.log("\n EXERCÍCIO 1 - 1");
// 1.  Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro.
const exibeMensagem = (mensagem) => {
    console.log(mensagem);
}
exibeMensagem("Uma função que exibe a mensagem");
console.log("EXERCÍCIO 1 - 2");
// 2. Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimí-lo.
const somaSemRetorno = (n1, n2) => {
    exibeMensagem(n1 + n2);
}
somaSemRetorno(12, 32);

// EXERCÍCIO 2

// Considere o seguinte array e utilize ele para os exercícios:
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];

// a. Escreva uma função que receba um array como parâmetro e retorne um array com apenas os números pares e multiplicados por 2.
console.log("\nEXERCÍCIO 2 - a");
const multiplicaParesPorDois = (array) =>{
    const novoArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 == 0)
            novoArray.push(array[i]);
    }
    return novoArray;
}
console.log(multiplicaParesPorDois(numeros));
// b. Escreva uma função que receba um array como parâmetro e retorne o maior número deste array.
console.log("EXERCÍCIO 2 - b");
const maiorNumero = (array) =>{
    let maior = array[0];
    for(let i=1; i<array.length; i++){
        if(maior < array[i])
            maior = array[i];
    }
    return maior;
}
console.log(maiorNumero(numeros));
// c. Escreva uma função que receba um array como parâmetro e retorne o **índice** do maior número deste array.
console.log("EXERCÍCIO 2 - c");
const maiorNumeroIndice = (array) =>{
    let maior = 0;
    for(let i=1; i<array.length; i++){
        if(array[maior] < array[i])
            maior = i;
    }
    return maior;
}
console.log(maiorNumeroIndice(numeros));

// d. Escreva uma função que recebe um array como parâmetro e retorne este array invertido.
console.log("EXERCÍCIO 2 - d");
const arrayInvertido = (array) =>{
    let novoArray = [];
    for(let i = array.length-1; i >= 0; i--){
        novoArray.push(array[i]);
    }
    return novoArray;
}
console.log(arrayInvertido(numeros));