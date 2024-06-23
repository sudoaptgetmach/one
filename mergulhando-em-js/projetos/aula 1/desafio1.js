// Desafio: hora da prática

alert('Boas vindas ao nosso site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = "Erro! Preencha todos os campos!";
alert(mensagemDeErro);

nome = prompt('Qual é o seu nome?');
idade = prompt('Qual é sua idade?');

    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
if (idade => 18) {
    console.log('Você já pode tirar a habilitação!');
} else {
    console.log('Você ainda não pode tirar a habilitação!');
}