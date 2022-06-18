let carta1 = `<div class="card" onclick="virarCarta(this);">
<img class="frente" src="./img/front.png" alt="">
<img class="verso" src="./img/bobrossparrot.gif" alt="">
</div>`

let carta2 = `<div class="card" onclick="virarCarta(this);">
<img class="frente" src="./img/front.png" alt="">
<img class="verso" src="./img/explodyparrot.gif" alt="">
</div>`

let carta3 = `<div class="card" onclick="virarCarta(this);">
<img class="frente" src="./img/front.png" alt="">
<img class="verso" src="./img/fiestaparrot.gif" alt="">
</div>`


const baralho = [
    //fazer uma array com as cartas
]

function definirNumero() {
    const numeroDeCartas = Number(prompt("Olá! Por favor, digite um número PAR entre 4 e 14"));
    if (numeroDeCartas % 2 !== 0) {
        alert('Número inválido')
    } else if (numeroDeCartas < 4 || numeroDeCartas > 14) {
        alert('Número inválido')
    } else {
        darCartas();
    }
}

function darCartas () {
    //se o numero for x
    //pegar x cartas da array e colocar x*2 na tela
}

function virarCarta (elemento) {
    elemento.classList.toggle("virada")
}