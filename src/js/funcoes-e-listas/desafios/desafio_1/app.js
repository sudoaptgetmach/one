let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do Desafio';

function onClick(){

    console.log('O botão foi clicado');

}

function alertonClick(){

    alert('O botão foi clicado');

}

function promptCidade(){

    let cidade = prompt('Diga o nome de uma cidade do Brasil.');

    alert(`Estive em ${cidade} e lembrei de você.`);

}

function soma(){

    var numero1 = parseInt(prompt('Digite um número inteiro'));
    var numero2 = parseInt(prompt('Digite outro número inteiro'));
    var resultado = (numero1 + numero2);

    if (isNaN(numero1, numero2)){

        alert('Você deve inserir um número válido.')

    } else {

        alert(`A soma do número ${numero1} com o número ${numero2} é ${resultado}`);

    }
}