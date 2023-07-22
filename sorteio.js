function realizarSorteio() {
    let numerosSorteados =[];

    while (numerosSorteados.length < 10) {
        //gera um numero aleatória de 0 a 100
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

        if (!numerosSorteados.includes(numeroAleatorio)) {
            numerosSorteados.push(numeroAleatorio);
        }
    }
    //Exibir numeros na pagina HTML

    document.getElementById('numerosSorteados').textContent = numerosSorteados.join(',');
}