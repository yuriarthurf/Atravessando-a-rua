
function setup() {
  createCanvas(1280, 720);
  trilhaSonora.loop();
  trilhaSonora.setVolume(0.2);
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  posicaoInicial();
  verificaColisao();
  pontosVaca();
  marcaPonto();
}



