/*

Função que receba uma string e checa se ela
é um palíndromo

1. Receber a string
2. Limpar a string // regex
3. Deixar tudo minúsculo // toLowerCase
4. Inverter // split("") reverse() join("")
5. Comparar 

Bob.
A dama admirou o rim da amada.
Aí, Lima falou: "Olá, família".

*/

import { normalizer } from "../utils/normalizer"

const isPalindrome = (text: string): boolean => {
  const cleanText = normalizer(text)
  const invertedText = cleanText.split("").reverse().join("")
  return cleanText === invertedText
}

console.log(isPalindrome(`Bob.`)) 
console.log(isPalindrome(`A dama admirou o rim da amada.`))
console.log(isPalindrome(`Aí, Lima falou: "Olá, família"!`))

console.log(isPalindrome(`Bobz!`))


