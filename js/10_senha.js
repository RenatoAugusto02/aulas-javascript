'use strict';

const campoSenha = document.querySelector("#senha");
const botaoMostrar = document.querySelector("#mostrar");

botaoMostrar.addEventListener("pointerdown", function(){
    campoSenha.type = "text";
});

botaoMostrar.addEventListener("pointermove", function(){
    campoSenha.type = "password";
});

