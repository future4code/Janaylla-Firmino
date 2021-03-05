//Exercício 1

function inverteArray(array) {
   // implemente sua lógica aqui
   return array.reverse();
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   // implemente sua lógica aqui
   array = array.filter((item) => {
      return item % 2 == 0;
   });
   array = array.map((item) => {
      return item * item;
   })
   return array;
}
//Exercício 3

function retornaNumerosPares(array) {
   // implemente sua lógica aqui
   array = array.filter((item) => {
      return item % 2 == 0;
   });
   return array;
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maior = array[0];
   for (let i = 1; i < array.length; i++) {
      if (array[i] > maior)
         maior = array[i];
   }
   return maior;
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   // implemente sua lógica aqui
   return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const respostas = [false, false, true, true, true];
   return respostas;

}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui 
   array = []

   for (let i = 0; i < n; i++) {
      array.push(i * 2);
   }

   return array;
}

// Exercício 8

function checaTriangulo(a, b, c) {
   // implemente sua lógica aqui
   if (a === b && b === c)
      return "Equilátero";
   else if (a === b || a === c || b === c)
      return "Isósceles";
   else
      return "Escaleno";
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui

   const objeto = {
      maiorNumero: num1,
      maiorDivisivelporMenor: false,
      diferenca: 0
   }

   if (num2 > num1) {
      objeto.maiorNumero = num2;
      if (objeto.maiorNumero % num1 === 0) {
         objeto.maiorDivisivelporMenor = true;
      }
      objeto.diferenca = objeto.maiorNumero - num1;
   }
   else {
      if (objeto.maiorNumero % num2 === 0) {
         objeto.maiorDivisivelporMenor = true;
      }
      objeto.diferenca = maiorNumero - num2;
   }

   return objeto;
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   let maiorEMenor = [];
   array = ordenaArray(array);
   maiorEMenor.push(array[array.length - 2]);
   maiorEMenor.push(array[1]);
   return maiorEMenor;
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   return array.sort((a, b) => a - b);
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const nome = "O Diabo Veste Prada", ano = 2006, diretor = "David Frankel", atores = ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   filme = {
      nome: nome,
      ano: ano,
      diretor: diretor,
      atores: atores
   }
   return filme;
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const filme = filmeFavorito();
   
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
  
   // implemente sua lógica aqui
   retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: lado1*2+lado2*2,
      area: lado1*lado2
   }
   return retangulo;
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   pessoa.nome = "ANÔNIMO";
   return pessoa;
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   return arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 20;
   });
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   return arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 20;
   });
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   return array.map((num) => {
      return num * 2;
   });
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
   return array.map((num) => {
      return String(num * 2);
   });
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   array = array.map((item) => {
      if(item % 2 === 0)
         return item + " é par";
      else
         return item + " é impar";
   })
   console.log(array);
   return array;
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta(consultas) {
   // implemente sua lógica aqui
}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
}