let modal = document.querySelectorAll(".produto-carrinho");
let excluir = document.querySelectorAll(".bi-trash");

for (let i = 0; i < excluir.length; i++) {
    excluir[i].addEventListener("click", function (event) {
        if (!event.target.classList.contains(".bi-trash")) {
            modal[i].remove()
        }
    })

};

