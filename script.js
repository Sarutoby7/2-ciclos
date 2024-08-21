var botonCalcular = document.getElementById('calcularFactorial');
var campoNumeroFactorial = document.getElementById('numeroFactorial');
var contenedorResultado = document.getElementById('resultado');

botonCalcular.addEventListener('click', function() {
    var numero = parseInt(campoNumeroFactorial.value);
    var factorial = 1;

    for (var i = 1; i <= numero; i++) {
        factorial *= i;
    }

    contenedorResultado.textContent = 'El factorial de ' + numero + ' es ' + factorial;
});
