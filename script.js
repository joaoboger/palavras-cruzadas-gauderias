// waits the html page to be fully loaded and then
// executes the arrow function (callback)
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("botao-verificar");

    // when clicked, the arrow functions is executed
    button.addEventListener("click", () => {
        const value_word = document.getElementById("input-palavra").value.trim();
        const value_hint = document.getElementById("input-dica").value.trim();
        const message = document.getElementById("mensagem");
        
        if (value_word && value_hint) {
            message.innerText = "Enviado, obrigado pela dica! Pereta.";
            message.style.color = "green";
        }

        else {
            message.innerText = "Preenche direito, as duas caixas! Pereta."
            message.style.color = "red";
        }
    })

})