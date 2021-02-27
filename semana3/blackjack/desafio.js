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
const fontGrandeRed = "color: red; font-size: 30px; font-family: Arial, Helvetica, sans-serif;";
const fontGrandeBlack = "color: black; font-size: 30px ;font-family: Arial, Helvetica, sans-serif;";
const fontTextoBlack = "color: black; font-size: 20px; font-family: Arial, Helvetica, sans-serif;";
const fontTextoRed = "color: red; font-size: 20px; font-family: Arial, Helvetica, sans-serif;";
const fontIcon = "font-size: 100px;";


let vencedor = "";
let novaRodada = confirm("Quer iniciar uma nova rodada?");
let novoSorteio = false;
let rodadaJogador = 0;
let rodadaComputador = 0;
let rodadaEmpate = 0;

while (novoSorteio || novaRodada) {
   const cartasJogador = [comprarCarta(), comprarCarta()];
   const cartasComputador = [comprarCarta(), comprarCarta()];
   cartasComputador[1].sorteio;
   valorJogador = cartasJogador[0].valor + cartasJogador[1].valor;
   valorComputador = cartasComputador[0].valor + cartasComputador[1].valor;
   mostrar(cartasJogador, cartasComputador, true);

   if (valorComputador !== 22 && valorJogador !== 22) {
      let comprarCartas = false;
      novoSorteio = false;
      if(valorJogador < 21){
         comprarCartas = confirm("Deseja compra uma nova carta?");
      }
      while (comprarCartas && valorJogador < 21) {

         cartasJogador.push(comprarCarta());
         valorJogador += cartasJogador[cartasJogador.length - 1].valor;

         mostrar(cartasJogador, cartasComputador, true);

         if (valorJogador > 21) {
            vencedor = "O computador ganhou 😩";
            rodadaComputador++;
         }
         else if(valorJogador < 21){
            comprarCartas = confirm("Deseja compra uma nova carta?");
         }

      }
      if (valorJogador <= 21) {
         while (valorComputador < 21 && valorComputador < valorJogador) {
            cartasComputador.push(comprarCarta());
            valorComputador += cartasComputador[cartasComputador.length - 1].valor;
         }
         if (valorComputador > valorJogador && valorComputador <= 21) {
            rodadaComputador++;
            vencedor = "O computador venceu 😩";
         }
         else if (valorComputador > 21) {
            rodadaJogador++;
            vencedor = "Você venceu 😜";
         }
         else if (valorComputador === valorJogador) {
            rodadaEmpate++;
            vencedor = "Empate 😐";
         }
      }

      mostrar(cartasJogador, cartasComputador, false, true);
      

   }
   else {
      novoSorteio = true;
   }
   novaRodada = confirm("Quer iniciar uma nova rodada?");
}
console.clear();

console.log("%cO jogo acabou, regarregue a pagina para recomeçar", fontGrandeRed);
console.log("%cPlacar Final",fontGrandeBlack);

const rodada = rodadaEmpate + rodadaJogador + rodadaComputador;
console.log( "%cRodadas: "+rodada+"%c - Jogador: "+rodadaJogador
   +" - %cComputador: " + rodadaComputador
   +"%c - Empate: " + rodadaEmpate
      , fontGrandeRed, fontGrandeBlack, fontGrandeRed, fontGrandeBlack);

function cartasIcones(cartas, esconder = false) {

   let ind1 = 0;
   let ind2 = 0;
   stringIconeCartas = "";

   let i = 0;
   let cores = ["", "", "", "", "", "", "", "", "", ""];
   // console.log("esconder:", esconder, i);

   for (let carta of cartas) {
      if (esconder == false || i == 0) {
         // console.log("carta", carta.texto);
         //  posição 0 "♠️"
         //  posição 1 "♥️"
         //  posição 2 "♦️"
         //  posição 3 "♣️"
         const iconesCartas = [["🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮"],
         ["🂱", "🂲", "🂳", "🂴", "🂵", "🂶", "🂷", "🂸", "🂹", "🂺", "🂻", "🂽", "🂾"],
         ["🃁", "🃂", "🃃", "🃄", "🃅", "🃆", "🃇", "🃈", "🃉", "🃊", "🃋", "🃍", "🃎"],
         ["🃑", "🃒", "🃓", "🃔", "🃕", "🃖", "🃗", "🃘", "🃙", "🃚", "🃛", "🃝", "🃞"]];
         const naipe = carta.texto[carta.texto.length - 2];
         switch (carta.sorteio) {
            case 0:
               ind1 = 2;
               cores[i] = "color: red;" + fontIcon;
               break;
            case 1:
               ind1 = 1;
               cores[i] = "color: red; " + fontIcon;
               break;
            case 2:
               cores[i] = "color: black;" + fontIcon;
               ind1 = 3;
               break;
            case 3:
               cores[i] = "color: black;" + fontIcon;
               ind1 = 0;
               break;
         }
         i++;

         cartaSemNaipe = carta.texto.substring(0, carta.texto.length - 2);
         switch (cartaSemNaipe) {
            case "A":
               ind2 = 0;
               break;
            case "J":
               ind2 = 10;
               break;
            case "Q":
               ind2 = 11;
               break;
            case "K":
               ind2 = 12;
               break;
            default:
               ind2 = Number(cartaSemNaipe) - 1;
               break;
         }
         stringIconeCartas = stringIconeCartas + "%c" + iconesCartas[ind1][ind2];
      }
      else {
         stringIconeCartas = stringIconeCartas + "%c" + "🂠";
         cores[i] = "color: black;" + fontIcon;
         i++;
      }
   }
   // console.log(cores);
   console.log("%c " + stringIconeCartas, fontIcon, cores[0], cores[1], cores[2], cores[3], cores[4], cores[5],
      cores[6], cores[7], cores[8], cores[9]);
}

function mostrar(jogador, computador, esconde, mostrarPontuacao){
   let pontoJogador = "";
   let pontoComputador = "";
   
   console.clear();
 
  
   
   if(mostrarPontuacao){
      console.log("%cFim da rodada! %c♠ %c♥ %c♦ %c♣", fontGrandeBlack, fontGrandeBlack, fontGrandeRed, fontGrandeBlack, fontGrandeRed);
   console.log("%c"+vencedor, fontGrandeRed);
   }
   else{
      const rodada = rodadaEmpate + rodadaJogador + rodadaComputador+1;
      console.log("%cJogo de Blackjack! %c♠ %c♥ %c♦ %c♣", fontGrandeBlack, fontGrandeBlack, fontGrandeRed, fontGrandeBlack, fontGrandeRed);
      console.log( "%cRodada: "+rodada+"%c - Jogador: "+rodadaJogador
   +" - %cComputador: " + rodadaComputador
   +"%c - Empate: " + rodadaEmpate
      , fontGrandeRed, fontGrandeBlack, fontGrandeRed, fontGrandeBlack);

   console.log("%c-----------------------------------------------------------------------", fontTextoRed);
   }
   
   console.log("%cSuas cartas são: ", fontTextoBlack);
   cartasIcones(jogador);
   if(mostrarPontuacao)
   console.log("%c Pontuação = "+ valorJogador, fontTextoRed);

   console.log("%cSeu computador: ", fontTextoBlack);

   cartasIcones(computador, esconde);
   if(mostrarPontuacao)
   console.log("%c Pontuação = "+ valorComputador, fontTextoRed);
   
}
