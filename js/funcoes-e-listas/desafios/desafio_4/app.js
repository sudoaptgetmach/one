function listas() {

    console.log('Crie uma lista vazia com o nome listaGenerica');
    let listavazia = [];
    console.log(listavazia);

    console.log('Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: JavaScript ,C , C++, Kotlin e Python.');
    let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
    console.log(linguagensDeProgramacao);
    
    console.log('Adicione à lista linguagensDeProgramacao os seguintes elementos: Java, Ruby e GoLang.');
    linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
    console.log(linguagensDeProgramacao);

    let lista = ['Primeiro', 'Segundo', 'Terceiro'];
    console.log('Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.');
    console.log(lista[0]);

    console.log('Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.');
    console.log(lista[1]);

    console.log('Crie uma lista com 3 nomes e exiba no console apenas o último elemento.');
    console.log(lista[2]);

}