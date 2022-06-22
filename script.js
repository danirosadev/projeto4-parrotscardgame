const nomesGifs = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let cartaVirada, primeiraCarta, segundaCarta;
let baralho = [];
let numeroDeCartas = 0;
let jogadas = 0;
let acertos = 0;

function comparador() { 
	return Math.random() - 0.5; 
}

function renderizar(){
    let mesaDeJogo = document.querySelector('.baralho');
    for (let i = 0; i < baralho.length; i++){
        let cartaNaMesa = `<div class="card" onclick="virarCarta(this);">
        <img class="frente" src="./img/front.png" alt="">
        <img class="verso" src="./img/${baralho[i]}.gif" alt="">
        </div>`;

        mesaDeJogo.innerHTML += cartaNaMesa;
    }
}

function darCartas () {
    for (let i = 0; i < (numeroDeCartas/2); i ++) {
        let carta = nomesGifs[i];
        baralho.push(carta);
        baralho.push(carta);
    }
        baralho.sort(comparador);
        renderizar();
}

function qtasCartas (){
    numeroDeCartas = numeroDeCartas = Number(prompt("Olá! Por favor, digite um número PAR entre 4 e 14"));
    while (numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !== 0) {
        alert('numero invalido');
        numeroDeCartas = Number(prompt("Olá! Por favor, digite um número PAR entre 4 e 14"));
    }
    
    darCartas();
}

function resetarJogo(){
    primeiraCarta = undefined;
    segundaCarta = undefined;
}

function desvirarCarta (){
    primeiraCarta.classList.remove('virada');
    segundaCarta.classList.remove('virada');
    resetarJogo();
}

function virarCarta (elemento) {    
    elemento.classList.add("virada");
    jogadas++;
    if (primeiraCarta === undefined) {
        primeiraCarta = elemento;
    } else {
        if (segundaCarta === undefined){
            segundaCarta = elemento;

            if(primeiraCarta.innerHTML === segundaCarta.innerHTML){
                resetarJogo();
                acertos +=2;
                setTimeout(finalizar, 1200);
            } else {
                setTimeout(desvirarCarta, 1000);
            }

        }
    }
}

function finalizar(){
    if(acertos === baralho.length){
        alert(`Você conseguiu terminar o jogo em ${jogadas} jogadas.`);
        let resposta = confirm('Quer jogar de novo?');
        if (resposta === true){
            window.location.reload();
        } else {
            alert('Até a próxima!')
        }
    }
}

qtasCartas();