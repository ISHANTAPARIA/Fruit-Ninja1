var play=1;
var end=0;
var gamestate=1;
var r,score;


var sword,sword_image,gameover;
var fruit,fruit1,fruit2,fruit3,fruit4;
var monster,monster_Image;

var touches;
function preload(){
  sword_image=loadImage("sword.png");
  gameover=loadImage("gameover.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  monster_Image=loadAnimation("alien1.png","alien2.png");
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  
  sword=createSprite(40,200,20,20);
  sword.addImage(sword_image);
  sword.scale=0.7;
  
  fruitsGroup=createGroup();
  enemyGroup=createGroup();
  
  sword.setCollider("rectangle",0,0,40,40);
 
}
score=0;

function draw(){
background("lightblue");
  textSize(20);
  text("Score="+score,10,20);
  
  if(gamestate === play){
  sword.x=World.mouseX;
  sword.y=World.mouseY;
    
    
  }
  if(sword.isTouching(fruitsGroup)){
    fruitsGroup.destroyEach();
    score=score+Math.round(random(1,3));
  }
  if(sword.isTouching(enemyGroup)){
    gamestate=end;
  }
  
  if(gamestate === play){
     fruits();
  Enemy();
    
  }
  if(gamestate === end){
    sword.addImage(gameover);
    sword.x=width/2;
    sword.y=height/2;
    fruitsGroup.setVelocityXEach(0);
   enemyGroup.setVelocityXEach(0);
    fruitsGroup.destroyEach(0);
   enemyGroup.destroyEach(0);
  }

  
  drawSprites();
}

function fruits(){
if (World.frameCount%60===0){
  
fruit = createSprite(width+40,380,20,20);
fruit.scale=0.2;  
r=Math.round(random(1,4));
    
if (r == 1){
  fruit.addImage(fruit1); 
}else if(r == 2) {
  fruit.addImage(fruit2);
}else if(r == 3) {
  fruit.addImage(fruit3);
}else {
  fruit.addImage(fruit4);
}
  
fruit.y=Math.round(random(50,390));
  
fruit.velocityX=-7;
fruit.setLifetime=100;
  
  
fruitsGroup.add(fruit);
  
}
}
function Enemy (){
 if(World. frameCount %200===0){
monster=createSprite(width+40,300,20,20);
monster.addAnimation("moving", monster_Image);
monster.y=Math.round(random(100,300));
monster.velocityX=-8;
monster.setLifetime=50;

enemyGroup.add(monster);
}
}