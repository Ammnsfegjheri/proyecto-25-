var playerPaddle, computerPaddle, ball, edges
var paddle1, paddle2, ballImage
var edges;


function preload(){
    // Agregar el nombre de la imagen después de loadImage dentro de ("")
    paddle1=loadImage("B1.png");
    paddle2=loadImage("B2.png ");
    ballImage=loadImage("Ball2.png");
}

function setup(){
  createCanvas(500,700);

  playerPaddle = createSprite(480,300,10, 70);
  computerPaddle = createSprite(20, 300, 10, 70);
  ball = createSprite(200,200,10,10);

  
    // Agregar los nombres de la imagen adecuados dentro de las comillas dobles
  playerPaddle.addImage("B1",paddle1);
  playerPaddle.scale=0.4;
  computerPaddle.addImage("B2",paddle2);
  computerPaddle.scale=0.4;
  ball.addImage("Ball2.png", ballImage);
  ball.scale=0.4;

// Agregar velocityX y velocityY debajo
    
   ball.velocityX=5;
   ball.velocityY=5
    
    
    edges=createEdgeSprites();
    
    
}

function draw(){
  background("purple");
// Agregar el número adecuado del borde dentro de (edges[ ]) para que la pelota rebote
    
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
    
  drawSprites();
}
