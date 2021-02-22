var balloon;
var balloonImg;
var city,cityImg;
var position,database;
function preload(){
  balloonImg=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");
  cityImg=loadImage("Hot Air Ballon-01.png")


}



function setup() {

  createCanvas(windowWidth,windowHeight);
   city=createSprite(windowWidth-200,windowHeight-200);
   city.scale=1;
   city.addImage(cityImg)
  database=firebase.database()
  balloon=createSprite(windowHeight/2,290);
  balloon.addAnimation("t",balloonImg);
  var balloonPosition=database.ref("balloon/position")
  balloonPosition.on("value",ReadPosition)
 


}


function draw() {
  background(255,255,255); 
  if(keyDown(UP_ARROW)){
    writePosition(0,-1);
  } 
  if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
  } 
  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
  } 
  if(keyDown(RIGHT_ARROW)){
    writePosition(+1,0);
  } 


  drawSprites();
}
function writePosition(x,y){
  database.ref("balloon/position").set({
    x:position.x+x,
    y:position.y+y
  })
}
function ReadPosition(data){
  position=data.val();
  balloon.x=position.x;
  balloon.y=position.y;


}
