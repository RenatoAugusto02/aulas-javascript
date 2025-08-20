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

// Acessamos as propriedades usando NomeDoObjeto.NomeDaPropriedade
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos de idade`);

// Exemplo 2: objeto com array
console.log("\nExemplo 2\n");

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

/* Para acessar algum dos volumes, primeiro passamos pela propriedade 'volumes' usando o ponto, e depois usamos os colchetes com o índice para acessar o elemento do array */
console.log(`Meu livro preferido é ${livro.volumes[1]}`);

//  Exemplo 3: array de objetos
console.log("\nExemplo 3\n");

const livros = [
    {
        titulo: "O assassinato no Expresso do Oriente",
        autor: "Agatha Christie"
    },

    {
        titulo: "Crepúsculo",
        autor: "Stephenie Meyer"
    },

    {
        titulo: "Sei lá",
        autor: "Sei lá"
    }
];

console.log(livros);

console.log(livros[2].titulo);

// Atividade
const aluno = {
    nome_completo: "João da silva",
    data_de_nascimento: "6/9/69",
    lista_de_telefone:[
        "(11)9669-6011",
        "+55 11 4002-8922"
    ],

    endereco:{
        rua: "Rua Nicolau",
        numero: "69",
        bairro: "nova união"
    }
    
}

console.log(`Nome: ${aluno.nome_completo}`);
console.log(`Telefone celular: ${aluno.lista_de_telefone[1]}`);
console.log(`Bairro: ${aluno.endereco.bairro}`);
console.log(`O aluno mora na rua ${aluno.endereco.rua}, numero ${aluno.endereco.numero}`);



