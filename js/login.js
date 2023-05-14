let btnlogin = document.querySelector('#botaologin')

btnlogin.addEventListener("click", function () {
    let inputvalor = document.querySelector('#login').value;
    let senhavalor = document.querySelector('#senha').value;

    if (inputvalor === "" || senhavalor === "") {

        document.querySelector("#mensagemok").insertAdjacentHTML(
            "afterend",
            `<div class="card-test">
            <span>Você não preencheu todos os campos</span>
            </div>`
        )

        let mensage = document.querySelector('.card-test')
        setTimeout(() => {
            mensage.style.display = "none"
        }, 3000)

    } else {
        // alert("Login realizado com sucesso")
        document.querySelector("#mensagemok").insertAdjacentHTML(
            "afterend",
            `<div class="card-test">
            <span>LOGIN EFETUADO COM SUCESSO!</span>
            </div>`
        )

        let mensage = document.querySelector('.card-test')
        setTimeout(() => {
            mensage.style.display = "none"
        }, 3000)

    }

    document.querySelector('#login').value = "";
    document.querySelector('#senha').value = "";

})

