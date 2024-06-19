// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log('Boas-vindas!');

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

console.log('Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.');

let nome = prompt('Qual é o seu nome?');

console.log(`Olá, ${nome}!`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" . 

console.log('Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" . ');

let nomeAlert = prompt('Qual é o seu nome?');

alert(`Olá, ${nomeAlert}!`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

console.log('Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.');

let linguagem = prompt('Qual é sua linguagem de programação favorita?');

console.log(`Sua linguagem de programação favorita é ${linguagem}.`)

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

console.log('Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.');

var valor1 = 1;
var valor2 = 39;
var resultado = (valor1 + valor2);

console.log(`A soma de ${valor1} mais ${valor2} é ${resultado}.`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

console.log('Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.');

var valor3 = 1;
var valor4 = 39;
var resultadoSubtracao = (valor3 - valor4);

console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultadoSubtracao}.`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

console.log('Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.');

let idade = prompt('Qual é a sua idade?');

if (idade >= 18) {

    console.log('Você é maior de idade!');

} else {

    console.log('Você é menor de idade!');

}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

console.log('Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.');

var numero = prompt('Digite um número aleatório:');

switch(numero){

    case isNaN(numero):
        alert('Você precisa fornecer um número válido!');
        break;
    case numero > 0:
        alert(`O número ${numero} é positivo!`)
        break;
    case numero < 0:
        alert(`O número ${numero} é negativo!`)
        break;
}

// Use um loop while para imprimir os números de 1 a 10 no console.

console.log('Use um loop while para imprimir os números de 1 a 10 no console.');

var contar10 = 10;

while (contar10 > 0){

    console.log(contar10);
    contar10--;

}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

console.log('Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.');

var nota = 7;

if (nota >= 7) {

    console.log('Aprovado')

} else {

    console.log('Reprovado')

}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

console.log('Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.');

var randNum = Math.random();

console.log(randNum);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

console.log('Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.');

var randNum1to10 = Math.floor(Math.random() * 10);
console.log(randNum1to10);

// ! estava dando erro pq vc tem que colocar () no Math.random, seu imbecil

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

console.log('Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.');

var randNum1to1000 = Math.floor(Math.random() * 1000);
console.log(randNum1to1000);