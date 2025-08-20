'use strict';

/*Comando Condicionais Comuns:
if- Se
else- Se Não
*/ 

// Condicional Simples
console.log("Exemplo 1:");

let numero = 5;

if(numero >= 10){
  console.log("Se você está vendo está mensagem e porque a condição é VERDADEIRA!");
}

console.log("\nExemplo 2");

// Condicional composta
let aluno = "Júlio";
let idade = 1;

if(idade < 18){
    console.log("Vai pra lá desgraça");
    
} else{
    console.log("Ta liberado!");
}

// Exercicio
let nota1 = 10;
let nota2 = 9;
let media = (nota1+nota2)/2;

console.log(`Nota:${media} `);
if(media >= 7){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
    
}

if(media > 9){
    console.log("ÓTIMO!")
}else if(media > 7){
    console.log("BOM!");
}else if(media > 5){
    console.log("RUIM!");
}else{
    console.log("PÉSSIMO!");
    
}