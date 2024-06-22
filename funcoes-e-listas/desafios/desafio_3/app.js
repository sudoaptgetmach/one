function calcularIMC(altura, peso){
    let imc = peso / (altura ** 2);
    console.log(imc);
}

calcularIMC(1.80, 80);

function fatorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * fatorial(num - 1));
    }
}

console.log(fatorial(5));

function cotacaoDolar(real){
    
    if (typeof real !== "number" | isNaN(real)) {
        return "Insira um valor válido.";
    }

    const dolar = (real * 4.80);

    let dolares = dolar >= 2 ? `dólares` : `dolar`;
    let reais = real >= 2 ? `reais` : `real`;
    
    console.log(`${real} ${reais} em dólar são ${dolar} ${dolares}.`);
    
}

cotacaoDolar(5);

function perimetro(base, altura){

    console.log(base*altura);
    console.log((base*2)+(altura*2));

}

perimetro(2,3);

function area(raio) {

    const pi = 3.14;

    console.log(pi*(raio*2));
    console.log(2*pi*raio);

}

area(5);

function tabuada(num) {

    if (isNaN(num)){
        console.log('Insira um valor válido.');
        return false;
    }

    let resultado = `Tabuada do número ${num}:`;
    let integer = 1;

    while (integer <= 10) {

     resultado += `${num} x ${integer} = ${num * integer}.\n`;
     integer++;
    }

    return resultado;
}

tabuada(5);

function mediaNumeros(){

        let numeros = [1, 2, 3, 4, 5];
        let soma = 0;
        let media = 0;

        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }

        media = soma / numeros.length;

        console.log(Math.floor(media));
}

mediaNumeros();