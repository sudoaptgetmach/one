let numeroaleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

const h1Original = function() { exibirTextoNaTela('h1', 'Jogo de adivinhação'); }
const pOriginal = function() { exibirTextoNaTela('p', 'Escolha um número entre 1 e 200'); }

h1Original();
pOriginal();

function verificarChute(){

    let chute = document.querySelector('input').value;
    let maior = (chute > numeroaleatorio);

    if(chute === numeroaleatorio) {
        
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

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 200 + 1);
}

function limparCampo() {

    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo() {
    
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;

    h1Original();
    pOriginal();

    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}