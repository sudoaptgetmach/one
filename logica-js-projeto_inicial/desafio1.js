// Desafio: hora da prática

alert('Boas vindas ao nosso site!');

var nome = 'Lua';
var idade = 25;
var numeroDeVendas = 50;
var saldoDisponivel = 1000;

let mensagemDeErro = "Erro! Preencha todos os campos!";
alert(mensagemDeErro);

var nome = prompt('Qual é o seu nome?');
var idade = prompt('Qual é sua idade?');

    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
if (idade > 18) {
    console.log('Você já pode tirar a habilitação!');
} else {
    console.log('Você ainda não pode tirar a habilitação!');
}
