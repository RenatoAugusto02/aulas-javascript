'use strict';

// Exemplo 1: Objeto com dados de uma pessoa
console.log("Exemplo 1\n");
const pessoa = {
    nome: "Chaves",
    idade: 8,
    cidade: "São Paulo",
    estado: "SP",
};

console.log(pessoa);

// Acessamos as prioridades usando NomeDoObjeto.NomeDaPrioridade
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos de idade`);

// Exemplo 2: objeto com array
console.log("\nExemplo2\n");

const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A sociedade do Anel",
        "As duas Torres",
        "O retorno do Rei"
    ]
};

console.log(livro);
console.log(livro.titulo);

/*Para acessar algum dos volumes, primeiro passamos pela prioridade (volume)usando 'ponto' e, chegando nela, usamos os 'colchetes' com índices pois se trata de um array */
console.log(`Meu livro preferido é ${livro.volumes[1]}`);

//  Exemplo 3: array de objetos
console.log("\nExemplo\n");

const livros = [
    {
        titulo: "O assassinato no Expresso do Oriente",
        autor: "Agatha Cristie"
    },

    {
        titulo: "Crepúsculo",
        autor: "Stephanie Myers"
    },

    {
        titulo: "Sei lá",
        autor: "Sei lá"
    }
];

console.log(livros);

console.log(livros[2].titulo);


