
function helloWorld(){
    console.log('Criar uma função que exibe "Olá, mundo!" no console.');

    console.log('Olá mundo!');

}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function olaNome() {

    console.log('Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.');

    let nome = prompt('Qual é o seu nome?');

    console.log(`Olá, ${nome}.`);

}

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function double(){
    
    console.log('Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.');
    
    let numeroDouble = parseInt(prompt('Insira um número aleatório'));
    let resposta = (numeroDouble * 2);

    console.log(`O dobro do número ${numeroDouble} é ${resposta}.`);


}

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(){
    
    console.log('Criar uma função que recebe três números como parâmetros e retorna a média deles.');
    
    var input1 = parseInt(prompt('Insira um número aleatório:'));
    var input2 = parseInt(prompt('Insira um número aleatório:'));
    var input3 = parseInt(prompt('Insira um número aleatório:'));
    var resposta = (input1 + input2 + input3) / 3;

   if (isNaN(input1, input2, input3)) {
        return false;
   } else {
        console.log(`A média dos números ${input1}, ${input2} e ${input3} é ${resposta}.`);
   }

}

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maxNumber(){
    
    console.log('Criar uma função que recebe dois números como parâmetros e retorna o maior deles.');

    var input1 = parseInt(prompt('Insira um número aleatório:'));
    var input2 = parseInt(prompt('Insira um número aleatório:'));

    if (isNaN(input1, input2)){
        return false;
    } else {
        console.log(Math.max(input1, input2));
    }
}

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplier(){
    
    console.log('Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo');
    
    var numero = parseInt(prompt('Insira um número aleatório'));
    var respostaMultiplicacao = (numero * numero);

    if(isNaN(numero)){
        return false;
    } else {
        console.log(`O resultado da multiplicação do número ${numero} por ele mesmo é ${respostaMultiplicacao}.`)
    }
}