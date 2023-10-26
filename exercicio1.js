let botaoCalcular = document.querySelector('#calcular');

botaoCalcular.addEventListener('click', function () {
    let g = parseFloat(document.querySelector('#constante').value);
    let m1 = parseFloat(document.querySelector('#massa1').value);
    let m2 = parseFloat(document.querySelector('#massa2').value);
    let d = parseFloat(document.querySelector('#distancia').value);

    let formula = (g * m1 * m2) / (d ** 2);

    let botaoResultado = document.querySelector('#resultado');
    botaoResultado.value = formula;
});