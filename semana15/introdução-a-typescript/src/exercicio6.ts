enum AC_DC{
    AC = "A.C",
    DC = 'D.C'
}

function whatHistoricalAge(year:number, c: AC_DC):string {
    switch(c){
        case AC_DC.AC:
            if(year > 4000){
                return "Pré-história";
            }
            else if(year > 476){
                return "Idade Antiga";
            }
            else if(year >= 0){
                return "Idade Média";
            }
            else{
                return "ANO INSERIDO INVALIDO";
            }
        case AC_DC.DC:
            if(year < 1453 && year >=0){
                return "Pré-história";
            }
            else if(year < 1789 && year >=0){
                return "Idade Moderna";
            }
            else if(year <= 2021 && year >=0){
                return "Idade Contemporânea";
            }
            else{
                return "ANO INSERIDO INVALIDO";
            }
        default:
            return "SIGLA INSERIDA INVALIDA";
    }
}
console.log(whatHistoricalAge(1990, AC_DC.DC))