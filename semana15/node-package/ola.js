const nome = process.argv[2];
const cabelo = process.argv[3];

if(!cabelo){
    console.log("Você precisa preencher a informação de cabelo")
}else{
    console.log(`Hey, ${nome}. Seu cabelo é ${cabelo}`);
}


console.log(process.argv[0]);
console.log(process.argv[1]);
//é um array. De todos os argumentos de um processo
//process.argv[0] SEMPRE VALE o próprio node
//process.argv[1] SEMPRE VALE o arquivo que o node vai rodar
//portanto, process.argv[0] e process.argv[1] sempre estão ocupados