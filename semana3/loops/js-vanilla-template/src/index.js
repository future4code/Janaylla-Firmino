// EXERCÍCIO 1
// O que o código abaixo está fazendo? Qual o resultado impresso no console?
// Esta somando valores que crescem de 1 em 1, que vão de 0 até 4. O resutado sera que 10 que é 0+1+2+3+4

// EXERCÍCIO 2
// a. O que vai ser impresso no console?
// 19
// 21
// 23
// 25
// 27
// 30

// b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso
// Não, a menos que você colocasse um contador dentro do bloco
// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? 

//DESAFIO 1
// Aumentam um 0 a cada linha adicionada
// 0
// 00
// 000
// 0000


// EXERCÍCIO 3
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a. Escreva um programa que:
// - **Imprima** cada um dos valores do array original.
console.log("---Exercicio 3. a---");
for(let numero of array){
    console.log(numero);
}
// b. Escreva um programa que:
// - **Imprima** cada um dos valores do array original divididos por 10
console.log("---Exercicio 3. b---");
for(let numero of array){
    console.log(numero/10);
}

// c. Escreva um programa que:
// - **Crie** um novo array contendo, somente, os números pares do array original.
// - **Imprima** esse novo array
console.log("---Exercicio 3. c---");
let novoArray = [];
for(let numero of array){
    if(numero%2 === 0){
        novoArray.push(numero);
    }
}
console.log(novoArray);
// d. Escreva um programa que:
// - **imprima** o index e os valores do array da seguinte forma: "O elemento do índex `i` é: `numero`"
// - **Imprima** este novo array
console.log("---Exercicio 3. d---");
for(let i=0; i<array.length;i++){
    console.log("O elemento do índex "+ i + " é " + array[i]);
}
// e. Escreva um programa que imprima no console o maior e o menor números contidos no array original
console.log("---Exercicio 3. e---");
maiorNumero=array[0];
menorNumero=array[0];
for(let i=1; i<array.length;i++){
    if(maiorNumero < array[i])
    {
        maiorNumero = array[i];
    }
    else if(menorNumero > array[i]){
        menorNumero = array[i];
    }
}
console.log("O maior número é "+maiorNumero+" e o menor é "+menorNumero);

// DESAFIO 1

console.log("---DESAFIO 1---");
let num = Number(prompt("Escolha um numero sem deixar o seu amigo ver:"));
while (isNaN(num)) {
    num = Number(prompt("Escolha um numero VALIDO:"));
}
let chute;
console.log("Vamos jogar");
for(let tentativas=1; num !== chute; tentativas++){
    chute = Number(prompt("Tente adivinhar: "));
    console.log("O número chutado foi", chute);
    if(num === chute){
        console.log("Acertou!!");
        if(tentativas === 1)
        console.log("De primeira, você sabe ler mentes?");
        else
        console.log("O número de tentativas foi:", tentativas);
        
    }
    else if(num > chute){
        console.log("Errrrrrrrou, é MAIOR");
    }
    else if(num < chute){
        console.log("Errrrrrrrou, é MENOR");
    }
    else{
        console.log("Errrrrrrrou, tente adicionar valores validos");
    }
}

// DESAFIO 2
// Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração? O que você poderia ter feito para que fosse mais fácil? Deixe comentários no seu código sobre esta reflexão.
// Sim. Ter pesquisado como retirar as casas decimais, em vez de tentar achar uma formula para isso só

console.log("---DESAFIO 2---");
num = Math.floor(Math.random()*100+1);
chute;
console.log("Vamos jogar");
for(let tentativas=1; num !== chute; tentativas++){
    chute = Number(prompt("Tente adivinhar: "));
    console.log("O número chutado foi", chute);
    if(num === chute){
        console.log("Acertou!!");
        if(tentativas === 1)
        console.log("De primeira, você sabe leu minha mente?");
        else
        console.log("O número de tentativas foi:", tentativas);
        
    }
    else if(num > chute){
        console.log("Errrrrrrrou, é MAIOR");
    }
    else if(num < chute){
        console.log("Errrrrrrrou, é MENOR");
    }
    else{
        console.log("Errrrrrrrou, tente adicionar valores validos");
    }
}

