// Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa

// Exercícios de interpretação de código
// 1.
// Sera exibido:

// 10
// 10 5
// 2.
// Sera exibido:
// 10 10 10

// Exercícios de escrita de código
// QUESTÃO 1
console.log("QUESTÃO 1");
let nome, idade;

console.log(typeof nome, typeof idade);

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// Porque eu não atribui um valor a essas variaveis

nome = prompt("Qual o seu nome?");
idade = prompt("Qual é a sua idade?");

console.log(typeof nome, typeof idade);

// e) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// Que agora são duas string mesmo que eu atribua apenas valores numericos
//  como no caso da idade, concluo que o prompt captura os valores como strung

console.log("Olá", nome,", você tem ",idade," anos")

// QUESTÃO 2
console.log("QUESTÃO 2");
const corPreferida = prompt("Qual é a sua cor preferida?");
const ultimaMusica = prompt("Qual foi a última música que você ouviu?");
const poder = prompt("Se você pudesse ter qualquer poder (tele transporte, voar, ler mentes), qual você escolheria?");
const trocaCorpo = prompt("Se você tivesse que trocar de corpo com qualquer pessoa do mundo por uma semana, quem você escolheria?");
const ursoOuAbelha= prompt("Você prefere ser atacado por um urso ou um enxame de abelhas?");
 

console.log("1. Qual é a sua cor preferida?"); console.log(corPreferida);
console.log("2. Qual foi a última música que você ouviu?"); console.log(ultimaMusica);
console.log("3. Se você pudesse ter qualquer poder (teletransporte, voar, ler mentes), qual você escolheria?"); console.log(poder);
console.log("4. Se você tivesse que trocar de corpo com qualquer pessoa do mundo por uma semana, quem você escolheria?"); console.log(trocaCorpo);
console.log("5. Você prefere ser atacado por um urso ou um enxame de abelhas?"); console.log(ursoOuAbelha);

// QUESTÃO 3
console.log("QUESTÃO 3");
let comidasPreferidar = ["Lasanha", "Estrogonofe", "Coxinha", "Batata Frita", "Inhame cozido"];

console.log("Essas são as minhas comidas preferidas:");
console.log(comidasPreferidar[0]);
console.log(comidasPreferidar[1]);
console.log(comidasPreferidar[2]);
console.log(comidasPreferidar[3]);
console.log(comidasPreferidar[4]);


comidasPreferidar[1] = prompt("Qual sua comida preferida?");

console.log("Essas são as minhas comidas preferidas:");
console.log(comidasPreferidar[0]);
console.log(comidasPreferidar[1]);
console.log(comidasPreferidar[2]);
console.log(comidasPreferidar[3]);
console.log(comidasPreferidar[4]);


// QUESTÃO 4
console.log("QUESTÃO 4");
const perguntas = ["Você já bebeu agua hoje?", "Você sabe dirigir?", "Você já pegou covid-19?"];
let respostas = [true, true, false];

console.log(perguntas[0], respostas[0]);
console.log(perguntas[1], respostas[1]);
console.log(perguntas[2], respostas[2]);