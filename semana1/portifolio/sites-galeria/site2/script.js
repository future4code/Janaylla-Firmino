function enviarEmail() {

    var email = document.getElementById('email');
     if(validarEmail(email.value))
    {
      
    document.getElementById('bemvindo').innerHTML = "Bem-vindo "+email.value;
      alert("O e-mail "+email.value+" foi enviado");
    }
    else{
      document.getElementById('bemvindo').innerHTML = "";
      alert("E-mail inválido");
    }
    
  }
  function validarEmail(em){
  
    var padrao = /^[a-zA-Z0-9][a-zA-Z0-9\.]+@[a-zA-Z0-9\.]+\.[a-zA-Z-0-9]/; 
    if(padrao.exec(em) &&
    em.indexOf("..") == -1
    )
    {
    return true;
    }
    else{
    return false;
    }
  }
function enviarEmail() {

  var email = document.getElementById('email');
   if(validarEmail(email.value))
  {
    
  document.getElementById('bemvindo').innerHTML = "Bem-vindo "+email.value;
    alert("O e-mail "+email.value+" foi enviado");
  }
  else{
    document.getElementById('bemvindo').innerHTML = "";
    alert("E-mail inválido");
  }
  
}
function validarEmail(em){

  var padrao = /^[a-zA-Z0-9][a-zA-Z0-9\.]+@[a-zA-Z0-9\.]+\.[a-zA-Z-0-9]/; 
  if(padrao.exec(em) &&
  em.indexOf("..") == -1
  )
  {
  return true;
  }
  else{
  return false;
  }
}
  