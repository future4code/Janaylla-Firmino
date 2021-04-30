export default function maskDate(dt){
    const date = new Date(dt); // converte para data
    // console.log(date.toLocaleDateString("pt-BR")); //formata de acordo com o requisito
    let stringDate = `${date.getDate()}/`;
    
    stringDate += date.getMonth() < 9 ? `0${date.getMonth()+1}` :`${date.getDate() + 1}`

    stringDate += `/${date.getFullYear()} `
    
    stringDate += date.getHours() < 10 ? `0${date.getHours()}:` :`${date.getHours() + 1}:`

    stringDate += date.getMinutes() < 10 ? `0${date.getMinutes()}` :`${date.getMinutes() + 1}`

    return (stringDate)
}