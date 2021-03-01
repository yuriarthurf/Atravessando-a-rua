let yCarros = [70, 180, 280, 380, 480, 580];
let xCarros = [1280, 1280, 1280, 1280, 1280, 1280];
let velocidadeCarros = [6, 9, 11, 12, 7, 10];
let comprimentoCarro = 90;
let alturaCarro = 65;

function mostraCarro() {
  for(let i = 0; i < imagemCarros.length; i = i + 1) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function posicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    if (passouTela(xCarros[i])) {
      xCarros[i] = 1280
    }
  }
}

function passouTela(xCarro) {
  return xCarro < - 160;
}

