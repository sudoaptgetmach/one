let listaDeNumerosEscolhidos = [];
let limiteTentativas = 20;
let numeroaleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});

}

const h1Original = function() { exibirTextoNaTela('h1', 'Jogo de adivinhação'); }
const pOriginal = function() { exibirTextoNaTela('p', `Escolha um número entre 1 e ${limiteTentativas}`); }

h1Original();
pOriginal();

function verificarChute(){

    let chute = document.querySelector('input').value;
    let maior = (chute > numeroaleatorio);

    if(chute == numeroaleatorio) {
        
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        
        document.getElementById('reiniciar').removeAttribute('disabled');
        
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Você descobriu o número secreto após ${tentativas} ${palavraTentativa}.`);
        
    } else if (maior) {
        exibirTextoNaTela('p', `Seu chute foi maior que o número secreto!`)
    } else {
        exibirTextoNaTela('p', `Seu chute foi menor que o número secreto!`)
    }

    console.log(numeroaleatorio);
    tentativas++;
    limparCampo();

}

function limparCampo() {

    chute = document.querySelector('input');
    chute.value = '';
    
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limiteTentativas + 1);
    let quantidadeDeElementos = listaDeNumerosEscolhidos.length;

    if (quantidadeDeElementos == limiteTentativas) {
        listaDeNumerosEscolhidos = [];
    }

    if (listaDeNumerosEscolhidos.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosEscolhidos.push(numeroEscolhido);
        console.log(listaDeNumerosEscolhidos);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {

    numeroaleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;

    h1Original();
    pOriginal();

    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}
