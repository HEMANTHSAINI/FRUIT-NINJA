var PLAY=1;
var END=0;
var gameState=1;

var sword,fruit1,fruit2,fruit3,fruit4,monster,monster2;
var swordImage,monsterImage,gameoverImage;
var fruitGroup,enemyGroup;
var gameover;
var score=0;
var fruitSound,gameoverSound;

function preload() {
  
  //load images
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage1 = loadImage("alien1.png");
  monsterImage2 = loadImage("alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png");
  
  fruitSound = loadSound("knifeSwooshSound.mp3");
  gameoverSound = loadSound("gameover.mp3");
  
}


function setup() {
  
  createCanvas(600,600);
  
  sword = createSprite(100,200,20,20);  
  sword.scale=0.7;
  sword.addImage(swordImage);
  sword.setCollider("rectangle",0,0,40,40);

  
  
  fruitGroup = new Group();
  enemyGroup = new Group();
  
}


function draw() {
  background(50, 48, 132);
  
  if(gameState === PLAY){
 
  Enemys();
  fruits();
  fruits1();   
  sword.y=World.mouseY;
  sword.x=World.mouseX;   
     
   if(fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    score=score+2;
     fruitSound.play();
   }
     
     else if(enemyGroup.isTouching(sword)) {
      
      gameState = END;
    
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.setvelocityXEACH=0;
      enemyGroup.setvelocityXEACH=0;
      sword.addImage(gameoverImage);
      sword.scale=1.5;
      sword.x=300;
      sword.y=300;
      gameoverSound.play();
    }
    
  }
  
  drawSprites();
  fill("gold");
  textSize(20);
  text("Score : " + score,480,20);
  
}


function fruits() {
  
  if(World.frameCount%80===0){ 
   fruit=createSprite(600,200,20,20);
   fruit.scale=0.2;
   
    r=Math.round(random(1,4)); 

     if(r == 1) {
      fruit.addImage(fruit1);
     } 
     else if (r == 2){
      fruit.addImage(fruit2)
     } 
     else if (r == 3){
      fruit.addImage(fruit3)
     } 
     else if (r == 4){
      fruit.addImage(fruit4)
     }

     fruit.y=Math.round(random(50,340));
     fruit.velocityX=-(7+(score/4));
     fruit.setlifetime=200;

     fruitGroup.add(fruit);
  }
  
}
  
function fruits1(){
  if(World.frameCount % 50 === 0){
    fruit=createSprite(30,400,20,20);
    fruit.scale=0.2;
     r=Math.round(random(1,4));
    
    if (r == 1) {
      
      fruit.addImage(fruit1);
      
    } else if (r == 2) {
      fruit.addImage(fruit2);
      
    } else if (r == 3) {
      fruit.addImage(fruit3);
      
    } else {
      fruit.addImage(fruit4);
    }
    
    
    
    fruit.y=Math.round(random(50,340));
    fruit.velocityX= (7+(score/4));
    fruit.setLifetime=300;
    fruitGroup.add(fruit);
  }
}




function Enemys() {
  
   if(World.frameCount%200 === 0) { 
     
     monster=createSprite(600,200,20,20);
     monster.addImage("moving", monsterImage1);
     monster.y=Math.round(random(25,275)); 
     monster.velocityX=-(8+(score/10));
     monster.setlifetime=50;

     enemyGroup.add(monster);  

   }
  
   if(World.frameCount%200 === 0) {
     
     monster2=createSprite(800,200,20,20);
     monster2.addImage("moving2", monsterImage2);
     monster2.y=Math.round(random(325,575));
     monster2.velocityX=-((8+score/10));
     monster2.setlifetime=50;

     enemyGroup.add(monster2);
     
   }
   
}
