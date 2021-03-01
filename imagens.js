let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let somPontos;
let trilhaSonora;
let somColisao;

function preload() {
  imagemEstrada = loadImage("Imagens/estrada.png");
  imagemAtor = loadImage("Imagens/ator-1.png");
  imagemCarro = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro2,imagemCarro3,imagemCarro]
  somPontos = loadSound("Sons/pontos.wav");
  trilhaSonora = loadSound("Sons/trilha.mp3");
  somColisao = loadSound("Sons/colidiu.mp3");
}