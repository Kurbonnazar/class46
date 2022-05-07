//Game States
var START=0;
var PLAY=1;
var END=2;
var gameState=START;
var score=0;
var life=3;

function preload(){
  bg1Image=loadImage(" Space 3.jpg")
  startImage=loadImage("Start.png")
  bg2Image=loadImage("spac4.jpg")
  spaceimage=loadImage("sp.png")
  fireballImage=loadImage("fireball.png")
  alien1Image=loadImage("alien 1.png")
  alien2Image=loadImage("Alien 2.png")
 
}

function setup(){
  
//create a canvas
createCanvas(windowWidth,windowHeight)
back1=createSprite(width/2,height/2)
back1.addImage(bg1Image)
back1.scale=0.6
startbtn=createSprite(width/2-450,height/2+100)
startbtn.addImage(startImage)
startbtn.scale=0.3
back2=createSprite(width/2,height/2)
back2.addImage(bg2Image)
//back2.scale=0.9
back2.visible=false
player=createSprite(width/2,height-80)
player.addImage(spaceimage)
player.scale=0.5
player.visible=false
fireballgroup=createGroup()


}

function draw() {
background(0)
drawSprites()
fill ("yellow")
textSize(30)
text("Score: "+score,width-300,80)
text("Lives: "+life,width-300,120)

if (gameState===START){
  if (mousePressedOver(startbtn)){
    gameState=PLAY
  }
}
if (gameState===PLAY){
  back1.visible=false
  startbtn.visible=false
  back2.visible=true
  player.visible=true
  back2.velocityY=4
  if (back2.y>windowHeight-250){
    back2.y=windowHeight/2
    
  }
  player.x=mouseX
  if (keyWentDown("space")){
    createfireball()
  }
}
}
function createfireball(){
  fireball=createSprite(200,500)
  fireball.addImage(fireballImage)
  fireball.x=player.x
  fireball.velocityY=-8
  fireball.lifetime=800
  fireball.scale=0.1
  fireballgroup.add(fireball)
}
function spawnalien1(){
  
}
