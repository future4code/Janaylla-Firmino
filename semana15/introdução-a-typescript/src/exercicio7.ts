// Para isto, ela classifica as roupas em: de verão, de inverno, para banho e íntimas. Cada uma tem a sua própria porcentagem de desconto: 5% (verão), 10% (inverno), 4% (banho) e 7% (íntimas). 
// Escreva uma função que receba um array de produtos com nome, preço e classificação; e retorne um array com essas informações e um campo mais: "preço com desconto"

enum classificacao {
    VERAO = "Verão",
    INVERNO = "Inverno",
    BANHO = "Banho",
    INTIMAS = "Íntimas"
}

type roupa = {
    nome: string,
    preco: number,
    classificacao: classificacao
    precoDesconto?: number
}

function roupasComDesconto(roupas: roupa[]):roupa[] {
    const roupasDesconto = roupas.map((roupa: roupa) => {
        let precoDesconto: number = 0;
        switch (roupa.classificacao) {
            case classificacao.VERAO:
                precoDesconto = roupa.preco - roupa.preco * 0.05;
                break;
            case classificacao.INVERNO:
                precoDesconto = roupa.preco - roupa.preco * 0.1;
                break;
            case classificacao.BANHO:
                precoDesconto = roupa.preco - roupa.preco * 0.04;
                break;
            case classificacao.INTIMAS:
                precoDesconto = roupa.preco - roupa.preco * 0.07;
                break;
            default:
                precoDesconto = roupa.preco;
        }
        return {...roupa, precoDesconto};
    })
    return roupasDesconto;
}



const biquine:roupa = {
    nome: "biquine",
    preco: 20,
    classificacao: classificacao.BANHO
}
const casaco:roupa = {
    nome: "casaco",
    preco: 200,
    classificacao: classificacao.INVERNO
}

console.table(roupasComDesconto([biquine, casaco]))