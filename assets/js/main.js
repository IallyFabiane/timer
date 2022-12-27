let paragrafo = document.querySelector(".paragrafo");

function getTimeFromSeconds(segundos) {
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

let segundos = 0;
let timer;

document.addEventListener('click', function(event) {
    const element = event.target;
    if (element.classList.contains('botao-iniciar')) {
        paragrafo.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    if (element.classList.contains('botao-pausar')) {
        clearInterval(timer);
        paragrafo.classList.add('pausado');
    }
    if (element.classList.contains('botao-zerar')) {
        clearInterval(timer);
        paragrafo.innerHTML = "00:00:00";
        paragrafo.classList.remove('pausado');
        segundos = 0;
    }
})

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        paragrafo.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}
