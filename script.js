
function exibirAlerta() {
    const mensagemSecreta = "Na noite anterior, um ratinho surgiu por uma fresta na parede da biblioteca e foi até o computador comer as migalhas de biscoito que a senhora Adelpha havia deixado.Sendo assim, o roedor andando pelo teclado,acabou deletando o livro.";
    const elemento = document.querySelector(".texto");
    elemento.classList.add("texto-secreto");
    elemento.innerHTML = mensagemSecreta;
    document.querySelector("button").classList.add("remove");
}
