function capturaFormPost() {
    const titulo = document.getElementById("titulo-post");
    const conteudo = document.getElementById("conteudo-post");
    const autor = document.getElementById("autor-post");

    if (titulo.value != "" && autor.value != "" && conteudo.value != "") {
        const img = document.getElementById("img-post");
        const Post = {
            titulo: titulo.value,
            autor: autor.value,
            conteudo: conteudo.value,
            img: img.value
        }
        titulo.value = "";
        conteudo.value = "";
        titulo.value = "";

        console.log(Post);
        addPost(Post);
        // titulo.focus();
    }
    else {
        alert("Prencha todos os campos obrigatorios");
    }
}

function addPost(Post) {
    let sectionPosts = localStorage.getItem("div");
    
    if(sectionPosts == null || sectionPosts == "null"){
        sectionPosts = "";
    }
    let postDiv = "";
    if (Post.img == "" || Post.img == undefined) {

        postDiv= '<div class="post"><h2>' + Post.titulo + '</h2><h4>'
            + Post.autor + '</h4><p>' + Post.conteudo + '</p> <button  onclick="excluir(this)">Excluir Post</button></div>';
    }
    else {
        postDiv = '<div class="post"><h2>' + Post.titulo + '</h2><h4>' + Post.autor + '</h4><img src="' + Post.img + '"><p>' + Post.conteudo + '</p> <button  onclick="excluir(this)">Excluir Post</button></div>';
    }
    if(postDiv != null)
        sectionPosts += postDiv;
    
    localStorage.setItem("div", sectionPosts);
    window.location.href = "posts.html";
}

function aptEnter(evento, campo) {
    if (evento.key == "Enter") {
        // console.log(campo.id);
        switch (campo.id) {
            case "titulo-post":
                document.getElementById("autor-post").focus();
                break;
            case "autor-post":
                document.getElementById("img-post").focus();
                break;
            case "img-post":
                document.getElementById("conteudo-post").focus();
                break;
        }
    }
}