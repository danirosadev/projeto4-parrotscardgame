let numeroDeCartas = Number(prompt("Olá! Por favor, digite um número PAR entre 4 e 14"));                     

while (numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !== 0) {
    alert('numero invalido');
    numeroDeCartas = Number(prompt("Olá! Por favor, digite um número PAR entre 4 e 14"));
}

darCartas();

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

let carta4 = `<div class="card" onclick="virarCarta(this);">
<img class="frente" src="./img/front.png" alt="">
<img class="verso" src="./img/metalparrot.gif" alt="">
</div>`

let carta5 = `<div class="card" onclick="virarCarta(this);">
<img class="frente" src="./img/front.png" alt="">
<img class="verso" src="./img/revertitparrot.gif" alt="">
</div>`

let carta6 = `<div class="card" onclick="virarCarta(this);">
<img class="frente" src="./img/front.png" alt="">
<img class="verso" src="./img/tripletsparrot.gif" alt="">
</div>`

let carta7 = `<div class="card" onclick="virarCarta(this);">
<img class="frente" src="./img/front.png" alt="">
<img class="verso" src="./img/unicornparrot.gif" alt="">
</div>`

const baralho = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];


function darCartas () {
    alert('oi')
    //document.querySelector('.baralho').innerHTML = Math.random(numeroDeCartas)
}

function virarCarta (elemento) {
    elemento.classList.toggle("virada")
}