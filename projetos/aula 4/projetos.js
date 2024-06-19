
let numeroSecreto = Math.floor(Math.random() * 20);;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {

    let chute = prompt('Chute um número aleatório entre 1 e 20:');

    console.log(`O número secreto é: ${numeroSecreto}.`);

    if(chute == "sair"){
        break;
    } else if (chute < 0 || isNaN(chute)) {

        tentativas = tentativas - 1;
        alert('Você deve inserir um chute válido.')
        continue;

    }
    
    if (chute == numeroSecreto) {

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        alert(`Parabéns! Você acertou em ${tentativas} ${palavraTentativa}!\nO número secreto era ${numeroSecreto}!`);
        tentativas++;
        break;

    } else {
    
        tentativas++;
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