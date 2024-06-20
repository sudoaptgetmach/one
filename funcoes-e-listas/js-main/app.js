let numeroaleatorio = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 200');

function verificarChute(){

    let chute = document.querySelector('input').value;

    if(chute == numeroaleatorio) {

        console.log(`Você acertou! O número aleatorio era ${numeroaleatorio}.`)

    }

    console.log(numeroaleatorio);

}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 200 + 1); 
}