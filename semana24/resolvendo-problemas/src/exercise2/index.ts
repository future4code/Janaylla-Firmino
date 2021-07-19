/*

Dadas duas strings, checar se são anagramas

1. Receber duas strings
2. Limpar as strings // reutilizar a função normalizer
3. Comparar quantidade de letras // length
4. Ordenar alfabeticamente // split sort join
5. Comparar

Alegria: galeria
Roma: amor
Céu: uec

bob: bobb

*/

import { normalizer } from "../utils/normalizer"

interface HashTable {
  [index: string]: number
}

const isAnagram = (
  firstText: string,
  secondText: string
): boolean => {
  const cleanFirstText = normalizer(firstText)
  const cleanSecondText = normalizer(secondText)

  if (cleanFirstText.length !== cleanSecondText.length) {
    return false
  }

  const sortedFirst = cleanFirstText.split("").sort().join("")
  const sortedSecond = cleanSecondText.split("").sort().join("")

  return sortedFirst === sortedSecond
}

const isAnagramHashTable = (
  firstText: string,
  secondText: string
): boolean => {
  const cleanFirstText = normalizer(firstText)
  const cleanSecondText = normalizer(secondText)

  if (cleanFirstText.length !== cleanSecondText.length) {
    return false
  }

  const getHashTable = (str: string): HashTable => {
    const result: HashTable = {}

    for (let char of str) {
      if (result[char]) {
        result[char]++
      } else {
        result[char] = 1
      }
    }

    return result
  }

  const firstHashTable = getHashTable(cleanFirstText)
  const secondHashTable = getHashTable(cleanSecondText)

  for (let char in firstHashTable) {
    if (firstHashTable[char] !== secondHashTable[char]) {
      return false
    }
  }

  return true  
}

// console.log(isAnagram("Alegria!", "galeria?"))
// console.log(isAnagram("Roma", "amor."))
// console.log(isAnagram("Céu!", "uec"))

// console.log(isAnagram("bob!", "bobb?"))

console.log(isAnagramHashTable("Alegria!", "galeria?"))
console.log(isAnagramHashTable("Roma", "amor."))
console.log(isAnagramHashTable("Céu!", "uec"))

console.log(isAnagramHashTable("bob!", "bobb?"))
console.log(isAnagramHashTable("pato!", "bobb?"))
