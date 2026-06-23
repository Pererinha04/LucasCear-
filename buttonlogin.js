const btnAbrir = document.getElementById("btnAbrir");
const overlay = document.getElementById("overlay");
const fechar = document.getElementById("fechar");

btnAbrir.addEventListener("click", () =>{
    overlay.classList.add("ativo");

});

fechar.addEventListener("fechar", () => {
     overlay.classList.remove("ativo");

});


