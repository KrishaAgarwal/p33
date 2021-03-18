const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var plinkos = [];
var divisions = [];
var particle, ground;
var line;

var divisionHeight = 150;
var gameState = "Start";

var score = 0;
var turn = 0 ;

function setup() {
  createCanvas(500,550);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,538,width,25);

  for(var k = 0; k <=width; k = k+50){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 20; j <=width; j = j+30){
    plinkos.push(new Plinko(j,120));
  }

  for(var j = 0; j <=width-10; j = j+30){
    plinkos.push(new Plinko(j,190));
  }

  for(var j = 20; j <=width; j = j+30){
    plinkos.push(new Plinko(j,260));
  }

  for(var j = 0; j <=width-10; j = j+30){
    plinkos.push(new Plinko(j,330));
  }
  
  line = createSprite(width/2, 400, width, 5);
}

function draw() {
  background(55,25,140);  
  Engine.update(engine);
  drawSprites();
  ground.display();

  textSize(15);
  text("500",12,420);
  text("500",62,420);
  text("400",112,420);
  text("400",162,420);
  text("300",212,420);
  text("300",262,420);
  text("200",312,420);
  text("200",362,420);
  text("100",412,420);
  text("100",462,420);

  textSize(24);
  textFont('Lucida Handwritting');
  text("Score : "+score,20,40);

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  mousePressed();
  particle.display();

  if(particle.x < 0 && particle.x > 100  && particle.y > 500){
    score = score + 500;
  }
  if(particle.x < 100 && particle.x > 200  && particle.y > 500){
    score = score + 400;
  }
  if(particle.x < 200 && particle.x > 300  && particle.y > 500){
    score = score + 300;
  }
  if(particle.x < 300 && particle.x > 400  && particle.y > 500){
    score = score + 200;
  }
  if(particle.x < 400 && particle.x > 500  && particle.y > 500){
    score = score + 100;
  }

}

function mousePressed(){
  if(gameState !== "End" && turn <= 5){
    turn = turn +1;
    particle = new Particle(mouseX, mouseY, 10, 10);
  };
}