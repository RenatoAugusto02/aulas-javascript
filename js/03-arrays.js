'use strict';

//Declarar um array
let vocalistas = ["Manoel Gomes", "Kleberiano", "Rogerio SkayLab", "Ozzy", "Dio", "Lemmy", "David Gilmour"]

console.log(vocalistas[1]);

console.log(`O ${vocalistas[3]}`);

// Relembrando como criar/usar arrays(vator) 
// No JS, você pode colocar qualquer coisa em array
let  seila = 6;
const coisas = [10, "Senac", "<h2>Oie</h2>", seila, 15.88];
console.log(coisas[1]);
console.log(coisas [4]);

/*Exercicios*/
const atividade = ["Pericles", "Kleberiano", "Zezão", "GTA5", "Futebol", "Fifa 20", "Pes 18", "Sambinha"];

console.log(atividade[1]);
console.log(atividade[4]);
console.log(atividade[7]);

console.log(`Gosto de ouvir as músicas do ${atividade[1]} e do ${atividade[2]}`);


/*Matriz de 2 dimenssões*/ 
const tecnologias = [
    ["HTML", "CSS", "JAVASCRIPT"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js", "SQL", "Express"]
];

//console.log(tecnologias);

console.log(tecnologias[0][2]);
console.log(tecnologias[1][0]);
console.log(tecnologias[2][3]);
