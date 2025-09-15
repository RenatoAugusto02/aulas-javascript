'use strict';

// Manipulando eventos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

const paragrafos = document.querySelector("p");
console.log(paragrafos);

exemplo01.addEventListener("click", function () {
    mensagem01.textContent = "Vai pra lá tadalafilo!";
    mensagem01.classList.add("destaque");
});

mensagem01.addEventListener("dblclick", function () {
    mensagem01.textContent = "";
})

/*Exercicio 
1) Crie uma constante nova e selecione o h1 da sua página
2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado.
3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda (padrão). */

const titulo = document.querySelector("h1");

titulo.addEventListener("mouseover", function () {
    titulo.textContent = "Praticando Eventos!";
    titulo.style.textAlign = "center";

});

titulo.addEventListener("mouseout", function () {
    titulo.textContent = "Eventos";
    titulo.style.textAlign = "left";
});

const referencia = document.querySelector("#referencia");
referencia.addEventListener("dblclick", function () {
    titulo.textContent = "Eventos";
    titulo.style.textAlign = "left";
});

// Exemplo 2: Ativar Modo Noturno
/*DESAFIO!
1)Faça a mudança de cores acontecer gradualmente (use transiction)
2) Se o modo noturno estiver ativado, ou seja, se a classe modo noturno estiver aplicado à página, faça o texto do botão mudar para "Desativar, Caso o contrario faça o texto do botão exibir "Ativar" */
const botaoModoNoturno = document.querySelector("#noturno");

botaoModoNoturno.addEventListener("click", function () {
    pagina.classList.toggle("modo_noturno");

    if (pagina.classList.contains("modo_noturno")) {
        botaoModoNoturno.textContent = "Desativar";
    } else {
        botaoModoNoturno.textContent = "Ativar";
    }
});

pagina.style.transition = "2s" ;

// Exemplo 3
const janelaModal = document.querySelector("#janelinha");

/*Esta função lida com o evento monitorado pelo listener no document.
Se a posição Y do mouse for abaixo de zero, ou seja, acima do topo do documento, fazemos a janelinha ser exibida (showModal) e desativamos o listener e a própria função, garantindo que essa rotina funcione somente uma vez.*/ 
function gerenciarJanela (event){
    if (event.clientY < 0 ) {
        janelaModal.showModal();
         document.removeEventListener("mouseout", gerenciarJanela);
    }
}

document.addEventListener("mouseout", gerenciarJanela); 

const botaoFechar = janelaModal.querySelector("button");
botaoFechar.addEventListener("click", function() {
    janelaModal.close();
});