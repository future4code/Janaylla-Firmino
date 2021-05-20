// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
// O proprio vcCode aponta que existe um erro, e se tentarmos rodar assim o console mostra o erro: Type 'number' is not assignable to type 'string'.

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings
// Na hora da declaração especificamos que a variavel pode receber 2 tipos de variveis:
// Ex: let meuNumero:string|number = "strung qualquer";

let meuNumero:string|number = 2;

enum CORES_ARCO_IRIS{
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    INDIGO = "Indigo",
    VIOLETA = "Violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_ARCO_IRIS
}
const jana = {
    nome: "Janaylla",
    idade: 19,
    corFavorita: CORES_ARCO_IRIS.INDIGO
}
const fulano = {
    nome: "Fulano",
    idade: 12,
    corFavorita: CORES_ARCO_IRIS.VERDE
}

const ciclano = {
    nome: "Ciclano",
    idade: 98,
    corFavorita: CORES_ARCO_IRIS.VERMELHO
}
const pessoas:pessoa[] = [jana, fulano, ciclano];

console.table(pessoas)