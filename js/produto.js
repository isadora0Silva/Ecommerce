let decrementar = document.querySelector(".bi-dash-square");
let incrementar = document.querySelector(".bi-plus-square");
let textoproduto = document.querySelector(".quantidade-produto");
let quantidadeproduto = parseInt(textoproduto.textContent);

incrementar.addEventListener("click", function(){
    quantidadeproduto++;
    textoproduto.innerHTML = quantidadeproduto;

});

decrementar.addEventListener("click", function(){
        if(quantidadeproduto <= 1){
            alert("A quantidade não pode ser menor que 1");
        }else{
            quantidadeproduto--;
            textoproduto.innerHTML = quantidadeproduto;
        }
});

let coracao = document.querySelector(".bi-heart-fill")

coracao.addEventListener("click", function(event){

    if(event.target.nodeName === "I"){
        event.target.classList.toggle("red")
    }

})