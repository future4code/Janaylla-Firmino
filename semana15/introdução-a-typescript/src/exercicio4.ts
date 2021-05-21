// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?
// tsc ./exercicio4.ts 
// node ./exercicio4.js

// b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.
// tsc ./src/exercicio4.ts 
// node ./exercicio4.js
// as diferenças estão no caminho que eu vou precisar percorrer para rodar o comando

// c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
// s, com o tsc sem especificar o arquivo a ser transpilado

// d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração do projeto ali em cima). Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? O que mudou em comparação com o arquivo criado pelos slides?
// O target que era es5 e passa a ser es6. E as propriedades que foram decomentadas.
type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
console.table([pokemon1, pokemon2, pokemon3]);