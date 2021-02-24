// Exercícios de interpretação de código

// 1. QUESTÃO

// a. false
// b. false
// c. true
// e. boolean

// 2. QUESTÃO

// a. undefined
// b. null
// c. 11
// d. 3
// e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9


// Exercícios de escrita de código

console.log("QUESTÃO 1");
let idadeUsuario = prompt("a. Qual sua idade?");
let idadeAmigo = prompt("b. Qual idade do seu melhor amigo?");

console.log("c. Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo);

console.log("d. Diferença de idade: ", idadeUsuario - idadeAmigo);

// 2. QUESTÃO

console.log("QUESTÃO 2");
let numeroPar = prompt("a. insira um número par");

console.log("b. resto da divisão: ", numeroPar%2);

// c. Todo resto de uma divisão de numeros pares por 2 é igual a 0

// d. No caso dos impares o resto é sempre 1

// 3. QUESTÃO

console.log("QUESTÃO 3");
//a.
let listaDeTarefas = [];

listaDeTarefas[0] = prompt("b. Insira 3 tarefas que você precisa realizar, aperte entar após escrever uma tarefa. Tarefa 0:");
listaDeTarefas[1] = prompt("Tarefa 1:");
listaDeTarefas[2] = prompt("Tarefa 2:");

console.log("c.", listaDeTarefas);

let indiceExclusao = prompt("d. Digite o indice da tarefa que você deseja  excluir: ");
//e.
listaDeTarefas.splice(indiceExclusao, 1);

console.log("f.", listaDeTarefas);

// 4. QUESTÃO

console.log("QUESTÃO 4");
let nomeUsuario = prompt("Qual o seu nome?");
let emailUsuario = prompt("Qual o seu e-mail?");

console.log("O e-mail", emailUsuario,"foi cadastrado com sucesso");
console.log("Seja bem-vinda(o)", nomeUsuario);
// DESAFIOS

console.log("DESAFIOS");
console.log("QUESTÃO 1");

// F -GRAUS_FAHRENHEIT
// C - GRAUS_CELSIUS
// K - KELVIN
// Seguido pela letra da questão

let Fa = 77;
let Ka = (Fa - 32) * 5/9 +  273.15;
console.log("a. 77°F =", Ka + "°K");

let Cb = 80;
let Fb = Cb*9/5 + 32;
console.log("b. 80°C =", Fb + "°F");

let Cc = 30;
let Fc = Cc*9/5 + 32;
let Kc = Cc + 273.15;
console.log("c. 30°C =", Fc + "°F e", Kc + "°K");

let Cd = prompt("Insira o valor dos Celcius que deseja coverter: ");
let Fd = Cd*9/5 + 32;
let Kd = Cd + 273.15;
console.log("d. ", Cd + "°C =", Fd + "°F -", Kd + "°K");


console.log("QUESTÃO 2");

let Kwh = 0.05;
let Kw = 280;

valor = Kw * Kwh;
console.log("a.", "Valor a ser pago em 280kh é de", valor + "R$");

valor += valor*0.15;
console.log("b.", "Valor a ser pago em 280kh com desconte de 15%", valor +"R$");


console.log("QUESTÃO 3");

let libraA = 20;
let KgA = libraA / 2.2046;
console.log("a." + libraA + "lb equivalem a " + KgA +"kg");

let oncaB = 10.5;
let KgB = oncaB / 35.274;
console.log("b." + oncaB + "oz equivalem a " + KgB +"kg");

let milhaC = 100;
let metroC = milhaC * 1609.34;
console.log("c." + milhaC + "mi equivalem a " + metroC +"m");

let pesD = 50;
let metroD = pesD * 0.3048;
console.log("d." + pesD + "ft equivalem a " + metroD +"m");

let galaoE = 103.5;
let litroE = galaoE * 3.78541;
console.log("e." + galaoE + "gal equivalem a " + litroE +"l");

let xícaraF = 450;
let litroF = 450 / 4;
console.log("f." + xícaraF + "xic equivalem a " + litroF +"l");

let libraG = prompt("Insira a quantidade de libra para converter em quilogramas: ");
libraG = Number(libraG);
let KgG = libraG / 2.2046;
console.log("g." + libraG + "lb equivalem a " + KgG +"kg");


