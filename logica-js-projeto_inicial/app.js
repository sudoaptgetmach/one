alert('Olá mundo. :)');

let numeroSecreto = 29;

let chute = prompt('Escolha um número entre 1 e 30');

if (chute == numeroSecreto){

    alert(`Parabéns! Você acertou! O número secreto era ${numeroSecreto}!`);

} else {

    alert('Você errou!');
    console.log(`O número secreto era: ${numeroSecreto}.`);

    if (chute > numeroSecreto) {

        alert('Seu chute é maior do que o número secreto!');
        
    } else {
    
        alert('Seu chute é menor do que o número secreto!');
    
    }
}