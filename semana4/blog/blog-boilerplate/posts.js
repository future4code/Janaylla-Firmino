const div = localStorage.getItem("div");
if(div != null || div != "null"){
    document.getElementById("container-de-posts").innerHTML += div;
}
function excluir(botao){
    // console.log(botao);
    post = botao.parentNode;
    post.remove();
    NovosPosts = document.getElementById("container-de-posts").innerHTML;
    console.log(NovosPosts);
    localStorage.setItem("div", NovosPosts);
}