//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diadasemana = prompt('Qual é o dia da semana?');

switch (diadasemana){
    case 'Sábado' || 'Domingo':
        alert('Bom final de semana!');
            break;  
    default:
        alert('Boa semana!');
        break;        
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let input = prompt('Escreva um número e eu direi se esse número é positivo ou negativo:');

if (isNaN(input)){
    alert('O valor digitado não é um número.');
} else if (input > 0){
    alert(`O número ${input} é positivo!`);
} else {
    alert(`O número ${input} é negativo!`);
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let numeroSecreto = Math.floor(Math.random() * 200);
let pontos = 0;

let numeroDeTentativas = prompt('Escolha um número de tentativas para acertar o número secreto!');
let tentativas = 0;

while (1) {

    if (numeroDeTentativas <= 0 || numeroDeTentativas == null) {
        alert('Você precisa definir um número de tentativas.')
        break;
    }

    let chute = prompt('Escolha um número aleatório');
    tentativas++;

    if (chute === "sair") {
        break;
    } else if (isNaN(chute)){
        alert('Você precisa digitar um valor válido.')
        tentativas--;
        continue;
    }

    if (chute == numeroSecreto){

        alert(`Parabéns! Você acertou em ${tentativas} tentativas! 
                \nO número secreto era ${numeroSecreto}!`);
        pontos = numeroDeTentativas * 20;
    
     if (pontos > 100) {
        alert(`Parabéns! Você atingiu ${pontos} e venceu!`);
        break;
    } else {
        continue;
    }
    
    } else {
        
        pontos = (numeroDeTentativas * -2) ;
        alert(`Tentativa ${tentativas} de ${numeroDeTentativas} \nVocê errou!`);
        alert(`Você tem ${pontos} pontos!`);
             
        console.log(`O número secreto era: ${numeroSecreto}.`);
        if (chute > numeroSecreto) {
    
            alert('Seu chute é maior do que o número secreto!');
            continue;
            
        } else {
        
            alert('Seu chute é menor do que o número secreto!');
            continue;
        
        }
    }
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let nome = prompt('Qual é o seu nome de usuário?');
let saldo = prompt('Quanto você deseja depositar?');


if(isNaN(saldo)) {
    alert('Você precisa depositar uma quantia válida.')
} else { 
    console.log('***********************');
    console.log(`Bem-vindo, ${nome}.`);
    console.log(`Seu saldo é ${saldo}.`);
    console.log('***********************');
}

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let bemvindo = prompt('Qual é seu nome?');

alert(`Bem-vindo, ${bemvindo}!`);
