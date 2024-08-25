function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function criptografarTexto(texto) {
    texto = removerAcentos(texto); // Remover acentos
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function descriptografarTexto(texto) {
    texto = removerAcentos(texto); // Remover acentos
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const terminalInput = document.getElementById('terminalInput');
        const commandInput = terminalInput.value.trim();
        const commandParts = commandInput.split(' ');
        const command = commandParts[0];
        const message = commandParts.slice(1).join(' ');

        if (!commandInput) {
            showError('A mensagem só pode conter letras minúsculas e sem acento.');
            return;
        }

        let result = '';
        if (command === 'encrypt') {
            result = criptografarTexto(message);
        } else if (command === 'decrypt') {
            result = descriptografarTexto(message);
        } else if (command === 'clear') {
            clearTerminal();
            return;
        } else {
            showError('Comando não reconhecido.');
            return;
        }
        
        const terminalBody = document.getElementById('terminalBody');
        const newLine = document.createElement('div');
        newLine.className = 'terminal-line';
        newLine.innerHTML = `<span>${commandInput}</span>`;
        terminalBody.appendChild(newLine);
        
        const resultLabelLine = document.createElement('div');
        resultLabelLine.className = 'terminal-line';
        resultLabelLine.innerHTML = `<span>Resultado:</span>`;
        terminalBody.appendChild(resultLabelLine);
        
        const resultLine = document.createElement('div');
        resultLine.className = 'terminal-line';
        resultLine.innerHTML = `<span>${result}</span>`;
        terminalBody.appendChild(resultLine);
        
        terminalInput.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
        }
}

function clearTerminal() {
    const terminalBody = document.getElementById('terminalBody');
    terminalBody.innerHTML = `
        <div class="terminal-line">
            <span class="prompt">$</span>
            <textarea id="terminalInput" placeholder="Digite um comando ou mensagem aqui..." rows="1" onkeydown="handleKeyDown(event)"></textarea>
        </div>
        <div class="error" id="error">A mensagem só pode conter letras minúsculas e sem acento.</div>
    `;
}

function closeTerminal() {
    document.getElementById('terminalContainer').style.display = 'none';
    document.getElementById('reopenButton').style.display = 'block';
}

function minimizeTerminal() {
    document.getElementById('terminalContainer').style.display = 'none';
    document.getElementById('reopenButton').style.display = 'block';
}

function maximizeTerminal() {
    const terminalContainer = document.getElementById('terminalContainer');
    if (terminalContainer.classList.contains('fullscreen')) {
        terminalContainer.classList.remove('fullscreen');
    } else {
        terminalContainer.classList.add('fullscreen');
    }
}

function reopenTerminal() {
    document.getElementById('terminalContainer').style.display = 'flex';
    document.getElementById('reopenButton').style.display = 'none';
}

function showError(message) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);
}

