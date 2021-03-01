let yAtor = 660;
let xAtor = 640;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 60, 60);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 6;
  }  
  if(keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()) {
      yAtor += 6;
    }
  } 
  if(keyIsDown(RIGHT_ARROW)) {
    xAtor += 6;
  } 
  if(keyIsDown(LEFT_ARROW)) {
    xAtor -= 6;
  } 
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 25)
    if (colisao){
      voltaVaca();
      somColisao.play();
      if (meusPontos > 0) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaVaca() { 
  yAtor = 670;
}

function pontosVaca() {
  textAlign(CENTER);
  textSize(40);
  fill(color(255, 240, 60))
  textStyle(BOLDITALIC);
  text(meusPontos, width / 5, 47)
}

function marcaPonto() {
  if (yAtor < 12){
    meusPontos += 1;
    somPontos.play();
    voltaVaca();
  }
}

function voceGanhou(){
  textAlign(CENTER);
  textSize(100);
  fill(color(255, 240, 60))
  text("Você ganhou! Aperta F5 aí!", width / 2, 200);
}

function podeSeMover() {
  return yAtor < 660;
}