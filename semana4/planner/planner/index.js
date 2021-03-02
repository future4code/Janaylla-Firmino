
function criarOptionHora(){
    const opcoes = document.getElementById('hora-dia');
    for(let i = 1; i <= 24; i++)
    {
        opcoes.innerHTML += "<option value='"+i+"'>"+i+" hora</option>";
    }
}
criarOptionHora();

function criarTarefa(){
    const tarefa = document.getElementById("tarefa").value;
  
    if(tarefa != ""){ 
        const diaDaSemana = document.getElementById("dias-semana").value;
        // console.log(tarefa, ": ", diaDaSemana);
        const hora = document.getElementById("hora-dia").value;
        const ulDiaSemana = document.getElementById(diaDaSemana).getElementsByTagName("ul");
        document.getElementById("tarefa").value = "";
        if(hora == "vazio"){
            ulDiaSemana[0].innerHTML += '<li onclick="feita(this)">'+tarefa+'</li>'; 
        }
        else{
            ulDiaSemana[0].innerHTML += '<li onclick="feita(this)">'+hora+' '+tarefa+'</li>'; 
        }
    }
    else{
        alert("Não pode enviar tarefas vazias");
    }
}
function feita(tarefaRiscar){
    // console.log(tarefaRiscar);    
    if(tarefaRiscar.className == ""){
        tarefaRiscar.className = "riscado";
    }
    else{
        tarefaRiscar.className = "";
    }
}
function excluirTudo(){
    semana = document.getElementsByClassName("semana");
    for(let i=0; semana[i] !== undefined; i++){
        tarefas = semana[i].getElementsByTagName("ul");
        tarefas[0].innerHTML = "";
    }
}