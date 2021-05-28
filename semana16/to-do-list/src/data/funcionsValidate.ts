export const validateEmail = (email:string):boolean =>{
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
    return reg.test(email);
 }
 export const validateData = (date:string):boolean|string =>{
    const reg = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;
    if(reg.test(date)){
        const dateSplit = date.split("/");
        const dateEn = dateSplit[2]+'-'+dateSplit[1]+'-'+dateSplit[0];
        const dateDateFormat = new Date(dateEn)
        
        if(dateDateFormat)
            return dateDateFormat.toLocaleDateString('fr-CA');
            
        return false;
    }
    return false
 }

  
 export const maskDateBr = (date:Date):string =>{
    return date.toLocaleDateString();
}
  