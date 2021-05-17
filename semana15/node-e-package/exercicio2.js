const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const isNumber = () => {
    return ((num1 || num1 === 0) &&
        (num2 || num2 === 0))
}


const color = {
    red: '\u001b[31m',
    reset: '\u001b[0m', 
    blue: "\x1b[34m",
    cyan: `\x1b[36m`
}

if (!isNumber()) {
    console.log(`Insira números validos`);
}
else{
switch (operation) {
    case `add`:
        console.log(`${color.blue}Resposta:${color.cyan} ${num1 + num2}`)
        break;
    case `sub`:
        console.log(`${color.blue}Resposta:${color.cyan} ${num1 - num2}`)
        break;
    case `mult`:
        console.log(`${color.blue}Resposta:${color.cyan} ${num1 * num2}`)
        break;
    case `div`:
        console.log(`${color.blue}Resposta:${color.cyan} ${num1 / num2}`)
        break;
    default:
        console.log(`Operação invalida`);
}
}

console.log(`${color.reset}`);