const countries = require("./countries");
//console.table(countries)
const query = process.argv[2];
console.log(query);

const result = countries.filter(
    (country) => country.name.toLowerCase().includes(query.toLowerCase())

);

console.table(result);
//process.argv é um array. De todos os argumentos de um processo
//process.argv[0] SEMPRE VALE o próprio node
//process.argv[1] SEMPRE VALE o arquivo que o node vai rodar
//portanto, process.argv[0] e process.argv[1] sempre estão ocupados