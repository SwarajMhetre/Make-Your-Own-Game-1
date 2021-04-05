var tank,tankImg;
var pcar, pcarImg;
var soilImg;
var bullet, bulletImg;
var score;

function preload(){

  tankImg = loadImage("indianTank.png");
  pcarImg = loadImage("chinaCar.png");
  soilImg = loadImage("Soil.jpg");
  bulletImg = loadImage("tankBullet.png");
}

function setup() {
  createCanvas(1200,600);

 tank = createSprite(1100, 300, 50, 50);
 tank.addImage(tankImg);
 tank.scale=0.3; 
}

function draw() {
  background(soilImg);  

if(keyDown(UP_ARROW)){
  tank.y=tank.y-5;
}
 if(keyDown(DOWN_ARROW)){
   tank.y=tank.y+5
   }
   if(keyDown(LEFT_ARROW)){
    tank.x=tank.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    tank.x=tank.x+5;
  }









  drawSprites();
}
function police (){
  if(frameCount%80===0){
    pcar=createSprite()
  }
}