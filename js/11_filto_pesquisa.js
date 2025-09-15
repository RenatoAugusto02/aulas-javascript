'use strict';

const campoBusca = document.querySelector("#busca");
const cidades = document.querySelectorAll("#cidades li");

campoBusca.addEventListener("input", function () {
    const termoDigitado = campoBusca.value.toLowerCase();

    for (const cidade of cidades) {
        if (cidade.textContent.toLowerCase().includes(termoDigitado)) {
            cidade.style.display = "list-item";
        } else {
            cidade.style.display = "none";
        }
    }
});