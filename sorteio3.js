const btn = document.getElementById('gerar');

btn.addEventListener('click', function sortear() {
    let numeros = [];
    let min = 0;
    let max = 25;

    while (numeros.length < 15) {
        let numerosSorteado = Math.floor(Math.random() * (max - min +1) + min);
        if (numeros.indexOf(numerosSorteado) === -1) {
            numeros.push(numerosSorteado);
        }
    }
    numeros.sort(function (a, b) {
        return a - b;
    })

    let numeroGerado = document.getElementById('num');
    numeroGerado.innerHTML = numeros.join(', ');
})