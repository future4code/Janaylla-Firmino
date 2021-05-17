// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Acessamos com o process.argm que é um array, as informações passadas estarão organizadas a partir da ordem da entrada a partir do indice 2 pois o indice 0 e 1 já estão ocupados com outras informações

const color = {
    red: '\u001b[31m',
    reset: '\u001b[0m', 
    blue: "\x1b[44m",
    cyan: "\x1b[36m"
}
if(!process.argv[2]){

    console.log(`${color.red}Olá! Você precisa adicionar seu nome e idade`);
}
else if(!process.argv[3]){
    console.log(`${color.red}Olá ${process.argv[2]}! Você precisa adicionar sua idade`);
}
else if(!Number(process.argv[3]) && Number(process.argv[3])!=0){
    console.log(`${color.red}Olá ${process.argv[2]}! Você precisa adicionar uma idade valida`);
}
else if(Number(process.argv[3]) || Number(process.argv[3]) === 0){
    console.log(`${color.cyan}Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos`);
    console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.  Em sete anos você terá ${Number(process.argv[3])+7}`);
}
console.log(`${color.reset}`);