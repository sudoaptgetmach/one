alert('Olá mundo. :)');

let numeroSecreto = 29;
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {

    let chute = prompt('Escolha um número entre 1 e 30');

    if (chute < 0 || isNaN(chute)) {

        tentativas = tentativas - 1;
        alert('Você deve inserir um chute válido.')
        continue;

    }
    
    if (chute == numeroSecreto) {

        tentativas++;
        alert(`Tentativa ${tentativas} \nParabéns! Você acertou!\nO número secreto era ${numeroSecreto}!`);
        break;
    
    } else {
    
        tentativas++;
        alert(`Tentativa ${tentativas}\nVocê errou!`);
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