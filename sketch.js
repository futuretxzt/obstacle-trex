var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudimg;
var obstacle,o1,o2,o3,o4,o5,o6





function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimg= loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  o1=loadImage("obstacle1.png");
  o2=loadImage("obstacle2.png");
  o3=loadImage("obstacle3.png");
  o4=loadImage("obstacle4.png");
  o5=loadImage("obstacle5.png");
  o6=loadImage("obstacle6.png");
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //set background color
  background(0);
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  spawnClouds();
  spawnObstacles();
  drawSprites();
  
}

function spawnClouds(){
  if(frameCount%60===0){
    cloud=createSprite(600,40,30,10)
    cloud.velocityX=-4;
    cloud.y=Math.round(random(20,50))
    cloud.addImage(cloudimg);
    cloud.scale=0.5
  }
}



function spawnObstacles(){
  if(frameCount%60===0){
    obstacle=createSprite(600,160,10,25);
    obstacle.velocityX=-4
    var rand=Math.round(random(1,6));
    switch(rand){
      case 1:obstacle.addImage(o1);
      break;
      case 2:obstacle.addImage(o2);
      break;
      case 3:obstacle.addImage(o3);
      break;
      case 4:obstacle.addImage(o4);
      break;
      case 5:obstacle.addImage(o5);
      break;
      case 6:obstacle.addImage(o6);
      break;
      default:break;
      
    }
    obstacle.scale=0.5
  }



}