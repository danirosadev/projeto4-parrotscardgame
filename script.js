let numeroDeCartas = Number(prompt("Olá! Por favor, digite um número PAR entre 4 e 14"));                     

while (numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !== 0) {
    alert('numero invalido');
    numeroDeCartas = Number(prompt("Olá! Por favor, digite um número PAR entre 4 e 14"));
}

darCartas();

const nomesGifs = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];

function comparador() { 
	return Math.random() - 0.5; 
}

function darCartas () {
    alert('oi')
    //nomesGifs.sort(comparador);
}

for (let i = numeroDeCartas; i <= nomesGifs.length; i ++) {
    let carta = `<div class="card" onclick="virarCarta(this);">
    <img class="frente" src="./img/front.png" alt="">
    <img class="verso" src="./img/${nomesGifs[i]}.gif" alt="">
    </div>`;
    
    document.querySelector('.baralho').innerHTML += carta;
}

function virarCarta (elemento) {
    elemento.classList.toggle("virada")
}