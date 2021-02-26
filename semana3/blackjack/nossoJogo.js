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
console.log("Bem vindo ao jogo de Blackjack!");

while(confirm("Quer iniciar uma nova rodada?")) {
   console.log("-----------------------------------------");
   const cartasJogador = [comprarCarta(), comprarCarta()];
   const cartasComputador = [comprarCarta(), comprarCarta()];
   let valorJogador = 0, valorComputador = 0;
   valorJogador = cartasJogador[0].valor + cartasJogador[1].valor;
   valorComputador = cartasComputador[0].valor + cartasComputador[1].valor;

   console.log("Usuário - cartas:", cartasJogador[0].texto, cartasJogador[1].texto, "- pontuação", valorJogador);
   console.log("Computador - cartas:", cartasComputador[0].texto, cartasComputador[1].texto, "- pontuação", valorComputador);
   if(valorJogador > valorComputador)
   {
      console.log("O usuário ganhou!");
   }
   else if(valorJogador < valorComputador){
      console.log("O computador ganhou!");
   }
   else{
    console.log("Empate!");
   }
} 
   console.log("O jogo acabou");