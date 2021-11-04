var Thief, Thief_Img;
var Guard1,Guard2,Guard3,Guard4,Guard5,Guard6,Guard7,Guard8,Guard9,Guard10,Guard11,Guard12,Guard13,Guard14,GuardsImg;
var Jewel, JewelImage;
var laser1, laser2, laser3, laser4;
var wall,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,barrier,checkpoint1,checkpoint2,checkpoint3 ;
var GameState,checkpoint,playerLives = 3, moving=false;
var Heart1,Heart2,Heart3,Heart1Img,Heart2Img,Heart3Img;
function preload(){
  Thief_Img = loadImage("Thief.png");
  JewelImage = loadImage("Jewel.png")
  
  Heart1Img = loadImage("heart_1.png")
  Heart2Img = loadImage("heart_2.png")
  Heart3Img = loadImage("heart_3.png")
}

function setup() {
  createCanvas(1300, 600);

  
  checkpoint1 = createSprite(125,90,100,100);

  checkpoint2 = createSprite(1200,220,100,100);

  checkpoint3 = createSprite(115,413,125,100);

  Thief = createSprite(125,90,200,200)
  Thief.addImage("Thief",Thief_Img)
  Thief.scale = .2

  Guard1 = createSprite(300,100,30,30)
  Guard2 = createSprite(300,500,200,200)
  Guard3 = createSprite(300,500,200,200)
  Guard4 = createSprite(300,500,200,200)
  Guard5 = createSprite(300,500,200,200)
  Guard6 = createSprite(300,500,200,200)
  Guard7 = createSprite(300,500,200,200)
  Guard8 = createSprite(300,500,200,200)
  Guard9 = createSprite(300,500,200,200)
  Guard10 = createSprite(300,500,200,200)
  Guard11 = createSprite(300,500,200,200)
  Guard12 = createSprite(300,500,200,200)
  Guard13 = createSprite(300,500,200,200)
  Guard14 = createSprite(300,500,200,200)



  Jewel = createSprite(1200,325,200,200);
  Jewel.addImage("Jewel",JewelImage);
  Jewel.scale = .25
  Jewel.setCollider("rectangle", 0, 0, 200, 200,0);


  
  wall = createSprite(210, 200,50,5);

  wall1 = createSprite(600, 175, 1100, 5);

  wall2 = createSprite(1200, 270, 100, 5);

  wall3 = createSprite(1150, 317, 5, 100);

  wall4 = createSprite(50, 292, 5, 570);

  wall5 = createSprite(650, 10, 1200, 5);
  
  wall6 = createSprite(665, 365, 975, 5);

  wall7 = createSprite(650, 575, 1200, 5);

  wall8 = createSprite(1250, 292, 5, 570);
  
  wall9 = createSprite(340, 275, 5, 100);

  wall10 = createSprite(360, 175, 40, 5);

  wall11 = createSprite(360, 225, 40, 5);
  
  wall12 = createSprite(380, 200, 5, 50);

  wall13 = createSprite(600, 463, 1100, 5);

  Heart1 = createSprite(displayWidth-160,40,10,10)
  Heart1.visible = false
  Heart1.addImage("heart1",Heart1Img)
  Heart1.scale = 0.2

  Heart2 = createSprite(displayWidth-180,40,10,10)
  Heart2.visible = false
  Heart2.addImage("heart2",Heart2Img)
  Heart2.scale = 0.2

  Heart3 = createSprite(displayWidth-200,40,10,10)
  Heart3.visible = true
  Heart3.addImage("heart3",Heart3Img)
  Heart3.scale = 0.2
}
function draw() {
  background(220);

  checkpoint1.shapeColor="Yellow"
  checkpoint2.shapeColor="Yellow"
  checkpoint3.shapeColor="Yellow"  

  Guard1.setVelocity(0,10)
  if(keyDown("space")){
    GameState="Play"
    moving=true
  }
  if (moving==true){
    if (GameState=="Play"){
      if (keyDown("up")) {
        Thief.y -= 5;
      }
      if (keyDown("down")) {
        Thief.y += 5;
      }
      if (keyDown("left")) {
        Thief.x -= 10;
      }
      if (keyDown("right")) {
        Thief.x += 10;
      }
    }
  }
  if (Thief.isTouching(Jewel)) {
    GameState="Win"
    textSize(100);
    fill("gold");
    stroke("black");
    text("You Have Won!", 300, 300);
  }
  if(Thief.isTouching(checkpoint1)){
    checkpoint=checkpoint1
  }
  if(Thief.isTouching(checkpoint2)){
    checkpoint=checkpoint2
  }
  if(Thief.isTouching(checkpoint3)){
    checkpoint=checkpoint3
  }
  if (Thief.isTouching(Guard1)){
  playerLives-=1
    
  if (checkpoint==checkpoint1){
    Thief.x=125
    Thief.y=90
  }
  if(checkpoint==checkpoint2){
    Thief.x=1200
    Thief.y=220
  }
  if(checkpoint==checkpoint3){
    Thief.x=115
    Thief.y=413
    }
  }
  if(playerLives==3){
    Heart1.visible=false
    Heart2.visible=false
    Heart3.visible=true

  }
  if(playerLives==2){
    Heart1.visible=false
    Heart2.visible=true
    Heart3.visible=false

  }  
  if(playerLives==1){
    Heart1.visible=true
    Heart2.visible=false
    Heart3.visible=false
  }

  if(playerLives==0){
    Heart1.visible=false
    Heart2.visible=false
    Heart3.visible=false
  }
  if (playerLives==0){
    GameState="End"
    textSize(100);
    fill("gold");
    stroke("black");
    text("You Have Lost!", 300, 300);
  }


  Guard1.debug= true
  Jewel.debug=true
  Thief.debug = true
  Thief.bounceOff(wall);
  Thief.bounceOff(wall1);
  Thief.bounceOff(wall2);
  Thief.bounceOff(wall3);
  Thief.bounceOff(wall4);
  Thief.bounceOff(wall5);
  Thief.bounceOff(wall6);
  Thief.bounceOff(wall7);
  Thief.bounceOff(wall8);
  Thief.bounceOff(wall9);
  Thief.bounceOff(wall10);
  Thief.bounceOff(wall11);
  Thief.bounceOff(wall12);
  Thief.bounceOff(wall13);
  drawSprites();

}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
