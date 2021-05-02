import {DivConteiner, Div} from './styled'
import Header from '../../components/header/header'
const fatos = ["Sabia que o nome Jessica foi criado por William Shakespeare, e aparece na peça “O Mercador de Veneza”, escrita entre os anos de 1596 e 1598?",
     "Você tem o hábito de xingar as pessoas de imbecil? Pois, de acordo com a definição médica desse termo, o imbecil é mais inteligente do que o idiota, e menos esperto do que o débil mental.",
    "Durante o período colonial norte-americano, no estado da Virginia era considerado crime conspirar ou destruir uma planta de tabaco sob a punição de pena de morte.",
    "Por alguma razão estranha, a Rainha Vitória da Inglaterra — cujo reinado durou de 1837 a 1901 —, proibia que o trem real ultrapassasse os 45 quilômetros por hora, e em uma ocasião chegou mandar açoitar e demitir o maquinista depois de perceber que o trem viajava mais depressa do que ela permitia.",
    "A primeira greve que ocorreu na História de que se tem registro ocorreu no ano 1160 a.C., quando os homens que trabalhavam na construção da tumba do faraó Ramsés III se uniram para reivindicar o pagamento de um pequeno salário por seus serviços.",
    "Se fizéssemos um buraco até o outro lado da Terra e jogássemos um livro dentro, ele levaria 42 minutos para completar o percurso.",
     "A ilha mais remota do mundo, chamada Bouvet, fica localizada no Atlântico Sul e o local mais próximo a ela é a Antártida, que está a 1.600 quilômetros de distância.",
    "Sabia que é impossível lamber o próprio cotovelo? E nós sabemos que você vai tentar lamber o seu só para comprovar que o que dissemos é verdade!",
    "A Batalha de Stalingrado é considerada por muitos historiadores como a maior e mais sangrenta da História, com número de vítimas estimado em 2 milhões de pessoas entre civis e militares.",
    "Segundo a Fédération Européenne des Victimes de la Route, 25 milhões de pessoas já perderam suas vidas em acidentes de tráfego ao longo da História.",
"Se “encolhêssemos” o Sol até ele ficar do tamanho de um glóbulo branco, considerando a mesma escala, a Via Láctea seria do tamanho dos EUA Continentais.",
 "O local mais próximo do encontro da longitude zero com a latitude zero se chama Cabo Três Pontos, localizado no Golfo da Guiné, na costa africana ocidental.",
"Em 1923, um jóquei chamado Frank Hayes venceu uma corrida em Nova York mesmo depois de morto. Hayes sofreu um ataque cardíaco no meio do percurso e seu corpo ficou preso à cela até que o cavalo cruzasse a linha de chegada.",
"Terremotos superpoderosos podem alterar o movimento da Terra sobre o seu eixo e, como isso, a duração dos dias de maneira permanente. Exemplos disso foram os sismos de 2004, em Sumatra, e o de 2011, no Japão, que deixaram os dias mais curtos em 6,8 microssegundos e 1,8 microssegundos, respectivamente.",
"A apresentação musical mais longa da História continua acontecendo neste momento na Igreja de St. Burchardi localizada em Halberstadt, na Alemanha. Trata-se de uma peça de John Cage chamada “Organ2/ASLSP”, tocada tão lentamente quanto possível. A reprodução da obra começou em setembro de 2001 e deve durar 639 anos, ou seja, ela será finalizada no ano de 2640"
]
const nRandon = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
export default function Error(){
    return (<DivConteiner>
         <Header/>

        <Div>
      <p id="txt">Parece que sua página não foi encontrada 😩</p>
      <p id="txt">Porém encontramos esse fato aleátorio para você: </p>
      <p id="fato"> {fatos[nRandon(0, fatos.length - 1)]}</p>
      <a href="https://www.megacurioso.com.br/papo-de-bar/48105-15-informacoes-aleatorias-para-alegrar-o-seu-fim-de-semana.html" target="blanck">fonte: megacurioso</a>
      </Div>
    </DivConteiner>)
}