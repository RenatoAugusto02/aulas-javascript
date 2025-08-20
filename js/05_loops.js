'use strict';

//Exemplo 1
console.log("Exemplo 1: WHILE (enquanto)");

let contador = 1;
while (contador <= 10) {
    console.log("Valor do contador:" +contador);
    contador++;  
}

//Exemplo 2
console.log("\nExemplo 2: FOR (PARA)");

for (let i = 0; i <= 10; i++) {
   console.log("I vale:" +i);
}

//Exemplo 3
console.log("\nExemplo 3: loop regressivo");
for (let i = 10; i >= 0 ; i--) {
    console.log("I vale:"+i);
}

//Exemplo 4
console.log("\nExemplo 4: loop e arrays");

const youtubers = ["Júlio Cocielo", "Games Edu", "Galo Fito", "Caracol Raivoso"];

for (let i = 0; i < youtubers.length; i++) {
    const element = youtubers[i];
    console.log("Youtubers:" +youtubers);
}

//Exemplo 5
console.log("\n------\n");
for (const youtuber of youtubers) {
   console.log(youtuber);
   
    
}
