function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido!');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0

// while (contador < listaDeTeclas.length) {
//     listaDeTeclas[contador].onclick = tocaSomPom; 
//     contador = contador + 1;

//     console.log(contador);
// }

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // console.log(instrumento)
    const idAudio = `#som_${instrumento}`;  //TEMPLATE STRING
    // console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    // console.log(contador);

    tecla.onkeydown = function (evento) {
        console.log(evento.code)  // ISSO PERMITE VER O CODE DA TECLA, POR EXEMPLO : "KEYA" , "SPACE" , "ENTER"

        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
