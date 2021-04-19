export const logado = () =>{
    if(window.localStorage.getItem('token'))
        return true;
    else
        return false;
  } 