// Contador que começa em 1 e vai até 10 usando while
console.log('Contador que começa em 1 e vai até 10 usando while');

let numeros = 1;

while (numeros <= 10) {

    console.log(numeros);
    numeros++;

}

console.log('Contador que começa em 10 e vai até 0 usando while');

// Contador que começa em 10 e vai até 0 usando while

let numerosAteZero = 10;

while (numerosAteZero >= 0) {

    console.log(numerosAteZero);
    numerosAteZero--;

}

console.log('Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.');

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let input = prompt('Número para contagem regressiva.');

if(isNaN(input) || input < 0){
    alert('Você deve inserir um número válido.')
    let input = prompt('Número para contagem regressiva.');
}

while (input >= 0){

    console.log(input);
    input--;

}

console.log('Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.');

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let contProgressiva = prompt('Número para contagem progressiva:');
let contador = 0;

while (contProgressiva >= contador){

    console.log(contador);
    contador++

}