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

for (let i = 0; i < (numeroDeCartas/2); i ++) {
    
    let carta = `<div class="card" onclick="virarCarta(this);">
    <img class="frente" src="./img/front.png" alt="">
    <img class="verso" src="./img/${nomesGifs[i]}.gif" alt="">
    </div>`;

    nomesGifs.sort(comparador);
    document.querySelector('.baralho').innerHTML += carta + carta;
}
let carta = "";

function darCartas () {
    alert('Vamos lá!');
    
}
let primeiraCarta = "";
function virarCarta (elemento) {
    primeiraCarta = "";
    let carta = document.querySelector('.virada');
    if (carta !== null) {
        carta.classList.remove('virada');
        carta = primeiraCarta;
    }
    
    elemento.classList.add('virada');
    comparar();
}


function comparar () {
   
}

