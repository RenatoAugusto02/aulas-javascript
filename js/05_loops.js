'use strict';

//Exemplo 1
console.log("Exemplo 1: WHILE (enquanto)");

let contador = 1;
while (contador <= 10) {
    console.log("Valor do contador:" + contador);
    contador++;
}

//Exemplo 2
console.log("\nExemplo 2: FOR (PARA)");

for (let i = 0; i <= 10; i++) {
    console.log("I vale:" + i);
}

//Exemplo 3
console.log("\nExemplo 3: loop regressivo");
for (let i = 10; i >= 0; i--) {
    console.log("I vale:" + i);
}

//Exemplo 4
console.log("\nExemplo 4: loop e arrays");

const youtubers = ["Júlio Cocielo", "Games Edu", "Galo Fito", "Caracol Raivoso"];

for (let i = 0; i < youtubers.length; i++) {
    const element = youtubers[i];
    console.log("Youtuber:" + element);
}

//Exemplo 5
console.log("\n------\n");
for (const youtuber of youtubers) {
    console.log(youtuber);
}

console.log("\nExemplo 5: loop e objeto");

const pessoa = {
    nome: "Jubileu",
    idade: 69,
    cidade: "São Paulo",
    estado: "SP"
};

// Usando loop for/in para objetos (exclusivo do JS)
for (const prop in pessoa) {
    console.log(pessoa[prop]);


};

// Exercicio
// console.log("\nExercicio");
// const clientes = ["Dio", "Ozzy", "Ian"];

// console.log(`Cliente: ${clientes[0]}, id: 1.`);
// console.log(`Cliente: ${clientes[1]}, id: 2.`);
// console.log(`Cliente: ${clientes[2]}, id: 3.`);


console.log("\nExemplo 3\n");

const clientes = [
    {
        nome: "Dio",
        id: "1"
    },

    {
        nome: "Ozzy",
        id: "2"
    },

    {
        nome: "Ian",
        id: "3"
    }
];



for (const cliente of clientes) {
    // console.log(nome);
    console.log(`-Cliente: ${cliente.nome}, id:${cliente.id}`);
    
}

