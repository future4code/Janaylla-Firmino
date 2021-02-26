/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 *
 *
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 *
 *
 *
 */
const font = "font-size: 15px;";
const fontIcon = "font-size: 150px";

function stringCartas(cartas = []) {
   let stringCartas = "";
   let ind1 = 0;
   let ind2 = 0;
   for (let carta of cartas) {
      // posição 0 "♠️"
      // posição 1- "♥️",
      // posição 2 "♦️",
      // posição 3 "♣️", 
      // const iconesCartas = [["🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮"],
      // ["🂱", "🂲", "🂳", "🂴", "🂵", "🂶", "🂷", "🂸", "🂹", "🂺", "🂻", "🂽", "🂾"], ["🃁", "🃂", "🃃", "🃄", "🃅", "🃆", "🃇", "🃈", "🃉", "🃊", "🃋", "🃍", "🃎"], ["🃑", "🃒", "🃓", "🃔", "🃕", "🃖", "🃗", "🃘", "🃙", "🃚", "🃛", "🃝", "🃞"]];
      // switch (carta.texto[carta.texto.length - 1]) {
      //    case "♥️":
      //       ind1 = 1;
      //       break;
      //    case "♦️":
      //       ind1 = 2;
      //       break;
      //    case "♣️":
      //       ind1 = 3;
      //       break;
      // }
      // let naipe = carta.texto.substring(0, cartas.length - 2);
      // console.log("naipe", naipe);
      // switch (naipe) {
      //    case "A":
      //       ind2 = 0;
      //       break;
      //    case "J":
      //       ind2 = 10;
      //       break;
      //    case "Q":
      //       ind2 = 11;
      //       break;
      //    case "K":
      //       ind2 = 12;
      //       break;
      //       default:
      //          ind2 = Number(naipe);
      //          break;
      // }
      // console.log("%c "+iconesCartas[ind1][ind2],fontIcon);
      stringCartas += carta.texto + " ";

   }
   
   return stringCartas;
}
let novaRodada = confirm("Quer iniciar uma nova rodada?");
let novoSorteio = false;
while (novoSorteio || novaRodada) {

   console.log("%c Bem vindo ao jogo de Blackjack! ♠ ♥ ♦ ♣", font);
   let vencedor = "";
   const cartasJogador = [comprarCarta(), comprarCarta()];
   const cartasComputador = [comprarCarta(), comprarCarta()];

   valorJogador = cartasJogador[0].valor + cartasJogador[1].valor;
   valorComputador = cartasComputador[0].valor + cartasComputador[1].valor;
   if (valorComputador !== 22 && valorJogador !== 22) {
      novoSorteio = false;
      console.log("--------------------------------------------------");
      console.log("Suas cartas são " + stringCartas(cartasJogador) + "A carta revelada do computador é " + cartasComputador[0].texto + "\n");

      let comprarCartas = confirm("Deseja compra uma nova carta?");
      while (comprarCartas && valorJogador < 21) {
         cartasJogador.push(comprarCarta());
         valorJogador += cartasJogador[cartasJogador.length - 1].valor;
         console.log("Suas cartas são " + stringCartas(cartasJogador) + "A carta revelada do computador é " + cartasComputador[0].texto + "\n");
         if (valorJogador > 21) {
            vencedor = "O computador ganhou";
         }
         else {
            comprarCartas = confirm("Deseja compra uma nova carta?");
         }
      }
      if (valorJogador <= 21) {
         while (valorComputador < 21 && valorComputador < valorJogador) {
            cartasComputador.push(comprarCarta());
            valorComputador += cartasComputador[cartasComputador.length - 1].valor;
         }
         if (valorComputador > valorJogador && valorComputador <= 21) {
            vencedor = "Computador venceu";
         }
         else if (valorComputador > 21) {
            vencedor = "Jogador venceu";
         }
         else if (valorComputador === valorJogador) {
            vencedor = "Empate";
         }
      }

      console.log(vencedor);
      console.log("Usuário - cartas:", stringCartas(cartasJogador), "- pontuação", valorJogador);
      console.log("Computador - cartas:", stringCartas(cartasComputador), "- pontuação", valorComputador);
   }
   else {
      novoSorteio = true;
      console.log("Não ntrou no if");
   }


   novaRodada = confirm("Quer iniciar uma nova rodada?");
   
   console.clear();
}
console.log("O jogo acabou");