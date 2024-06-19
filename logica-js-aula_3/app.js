alert('Olá mundo. :)');

let numeroSecreto = Math.floor(Math.random() * 20);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {

    let chute = prompt('Chute um número aleatório:');

    if(chute == "sair"){
        break;
    } else if (chute < 0 || isNaN(chute)) {

        tentativas = tentativas - 1;
        alert('Você deve inserir um chute válido.')
        continue;

    }
    
    if (chute == numeroSecreto) {

        if (tentativas = 1){            
            alert(`\nParabéns! Você acertou em ${tentativas} tentativa!\nO número secreto era ${numeroSecreto}!`);
        } else {
            alert(`\nParabéns! Você acertou em ${tentativas} tentativas!\nO número secreto era ${numeroSecreto}!`);
        }
        tentativas++;
        break;

    
    } else {
    
        tentativas++;
        console.log(`O número secreto é: ${numeroSecreto}.`);
        alert(`Tentativa ${tentativas}\nVocê errou!`);
    
        if (chute > numeroSecreto) {
    
            alert('Seu chute é maior do que o número secreto!');
            continue;
            
        } else {
        
            alert('Seu chute é menor do que o número secreto!');
            continue;
        
        }
    }
}