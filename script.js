const nomesGifs = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let cartaVirada;
let baralho = document.querySelector('.baralho');

let numeroDeCartas = Number(prompt("Olá! Por favor, digite um número PAR entre 4 e 14"));                     

while (numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !== 0) {
    alert('numero invalido');
    numeroDeCartas = Number(prompt("Olá! Por favor, digite um número PAR entre 4 e 14"));
}

darCartas();

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

    //baralho.sort(comparador);
}

function darCartas () {
    alert('Vamos lá!');
    
}

function virarCarta (elemento) {    
    cartaVirada = elemento.classList.add('virada');
    comparar();
}

function comparar () {
  
    cartaVirada = document.querySelector('.virada');

    let primeiraCarta = "";
    let segundaCarta = "";

    if (primeiraCarta === null){
        primeiraCarta = cartaVirada;
        //primeiraCarta.classList.add('virada');
    } else if (primeiraCarta !== null) {
        segundaCarta = cartaVirada;
        //segundaCarta.classList.add('virada');
    } 

    if (primeiraCarta.innerHTML !== segundaCarta.innerHTML){
        //primeiraCarta.classList.remove('virada');
    }

    
}
/*vira uma carta
tem carta virada? não
carta virada é a primeira
vira outra carta 
tem carta virada? sim
segunda carta
 */