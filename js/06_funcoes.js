'use strict';

console.log("Exemplo 1: Função anônima");

const exemplo1 = function() {
    console.log("Esta é uma função anônima");
}

exemplo1();

console.log("\nExemplo 2: Função Nomeada/Declarada");

function exemplo2() {
   console.log("Esta é uma função nomeada!");
    
}

exemplo2();

console.log("\nExemplo 3: Arrow Function");

const exemplo3 = () => {
    console.log("Esta é uma arrow function");
}

exemplo3();

console.log("\nExemplo 4: Função com Parâmetros");
function saudacao(nome = "visitante") {
    console.log(`Olá, ${nome}! Seja bem-vindo(a)`);
}

console.log(saudacao());
saudacao("Renato")


/*Sempre que tivermos a necessidade de trabalhar com o resultado do processamento de uma função, então essa função deve ter o return*/
console.log("\nExemplo 5: Função com parâmetro e retorno");
function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

let resultado1 = multiplicar(400, 5);
let resultado2 = multiplicar(200, 10);

console.log("Resultado 1:" +resultado1);
console.log("Resultado 2:" +resultado2);



console.log("\nExemplo 6: Simplificando com Arrow Functions");
/*function somar(valor1, valor2) {
    return valor1 + valor2;
}

console.log( somar(150, 500));
Versão 1*/

// Versão 2: Sintaxe Arrow Function com retorno implícito
const somar = (valor1, valor2) =>  valor1 + valor2;


console.log("Resultado:" +somar(150, 500));

console.log("\nExemplo 7: Formatando valor monetário");
let preco = 5000;
let desconto = preco * 0.1;
let precoFinal = preco - desconto; 

function formatarMoeda(valor){
   return new Intl.NumberFormat("pt-br", {style: "currency",currency:"BRL"}).format(valor);
}

console.log(`Preço original: ${formatarMoeda(preco)}`);
console.log(`Desconto: ${formatarMoeda(desconto)}`);
console.log(`Preço final: ${formatarMoeda(precoFinal)}`);

 