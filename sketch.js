var bg,arrow,skeleton,olis,bgImg,arrowImg,skeletonImg,olisImg,door,doorImg,shield,shieldImg;
var isShieldVisible=false;
var arrowG;
var shieldArray=[];
function preload(){
  bgImg=loadImage("images/background.png");
  skeletonImg=loadImage("images/skeleton.png");
  olisImg=loadImage("images/olis.png");
  arrowImg=loadImage("images/arrow.png");
  doorImg=loadImage("images/door.png");
  shieldImg=loadImage("images/shield.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  bg.addImage(bgImg);
  bg.scale=2.9;
   
  olis= createSprite(50,height-250,100,100);
  olis.addImage(olisImg);
  olis.scale=0.3;
  camera.position.y=0

  door=createSprite(width-80,height-230,50,50);
  door.addImage(doorImg);
  door.scale=0.45;

  skeleton=createSprite(width-150,height-190,100,100);
  skeleton.addImage(skeletonImg);
  skeleton.scale=0.3;

  shield=createSprite(150,height-250,100,100);
  shield.addImage(shieldImg);
  shield.scale=0.6;
  shield.visible=isShieldVisible;

  shieldposition=[shield.x,shield.y];

  arrowG= new Group();
}

function draw() {
  background("brown");  
  //image(bgImg,0,-height*4,width,height*5); 
  bg.velocityY=3;
  if(bg.y>windowWidth/2){
    bg.y=bg.width/3
  };
  drawSprites();

  if(keyDown("RIGHT_ARROW")){
    olis.position.x=olis.position.x+4;
    shield.position.x=shield.position.x+4;
  }

  if(keyDown("LEFT_ARROW")){
    olis.position.x=olis.position.x-4;
    shield.position.x=shield.position.x-4;
  }

  if(keyDown("UP_ARROW")){
    olis.position.y=olis.position.y-4;
    shield.position.y=shield.position.y-4;
    skeleton.position.y=skeleton.position.y-4;
  }

  if(keyDown("DOWN_ARROW")){
    olis.position.y=olis.position.y+4;
    shield.position.y=shield.position.y+4;
    skeleton.position.y=skeleton.position.y+4;
  }

  
  if(keyDown("S")){
    isShieldVisible=!isShieldVisible;
    if(isShieldVisible){
    showShield();
    }
  }
    if(keyDown("R")){
      shieldArray=[];
    }
  camera.position.y=olis.position.y;


   if(arrowG.isTouching(shield)){
    arrowG.destroyEach();
    }

  spawnArrows()


   
}
function spawnArrows(){
  if(frameCount%60===0){
    var arrow=createSprite(skeleton.position.x-50,skeleton.position.y-15);
    arrow.addImage(arrowImg);
    arrow.scale=0.3;
    arrow.velocityX=-10;

    arrow.lifetime=width/4;
    arrowG.add(arrow);
  }
}
function showShield(){
  shieldArray.push(shieldposition);
    for(i=0;i<shieldArray.length;i++){
    shieldArray[i].visible=true;
   };
};
