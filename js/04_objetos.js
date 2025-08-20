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
console.log(`O aluno mora na rua ${aluno.endereco.rua}, numerro ${aluno.endereco.}`);



