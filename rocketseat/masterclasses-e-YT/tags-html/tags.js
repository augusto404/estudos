document.addEventListener("DOMContentLoaded", () => {
    let
        // O progress começa em zero e a velocidade em um.
        progress = 0,
        incrementSpeed = 1,

        // A variável progressBar recebe o elemento com o ID bar.
        progressBar = document.getElementById('bar'),
        
        // Intervalo de tempo da animação
        progressInterval = setInterval(() => { // Isso é uma function.
            progress += incrementSpeed; // progress = progress + incrementSpeed.
            progressBar.value = progress; // O valor da progressBar recebe o valor de progress.

            if (progress >= 50) { // Valor limite que o carregamento será feito.
                clearInterval(progressInterval);
            }
        }, 70); // Velocidade em ms(milisegundos) da barra de carregamento.
});