
// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculoIMC(){

    const peso = parseInt(prompt("Qual é o seu peso?"));
    const altura = prompt("Qual é a sua altura?");
    const imc = (peso / (altura * altura));

    console.log(`O seu IMC é ${imc}.`);

}