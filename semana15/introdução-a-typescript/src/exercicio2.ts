// a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
// A entrada é um array. E a saida é um objeto com 3 propriedades numericos

type estatistica = {
    maior: number,
    menor: number,
    media: number
}
function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
// b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas
// numeros ordenado que é uma array de number, formado pelos item do array recebido ordenados. A soma que é um number.

// c. Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript
type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros:number[]) => estatistica
}

const amostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: obterEstatisticas
}

console.table(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))

