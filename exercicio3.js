function alternarExpandirRetrair(e) {
    let botaoClicado = e.currentTarget;
    let paragrafo = botaoClicado.parentNode;

    if (paragrafo.classList.contains('expandido')){
        paragrafo.classList.remove('expandido');
        botaoClicado.innerHTML = "+";
    }
    else {
        paragrafo.classList.add('expandido');
        botaoClicado.innerHTML = "-";
    }
};

let botaoExpandirRetrair = document.querySelectorAll('.botao-expandir-retrair');

botaoExpandirRetrair.forEach(function(botao) {
    botao.addEventListener('click', alternarExpandirRetrair);
});