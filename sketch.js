var fixedRectangle, movingRectangle;
var car;

function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(200, 200, 50, 80);

  movingRectangle = createSprite(400, 200, 80, 30);

  movingRectangle.shapeColor = "green";

  car = createSprite(600, 200, 50, 50);
  car.shapeColor = "blue"
  car.velocityX = -6;
}

function draw() {
  background(0,0,0); 
  
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;

if(isTouching()) {

  movingRectangle.shapeColor = "red";

}

else{

  movingRectangle.shapeColor = "green";

}
bounceOff(car, fixedRectangle);
  drawSprites();
}


function isTouching() {

  if(movingRectangle.x - fixedRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2
    && movingRectangle.y - fixedRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2
    && fixedRectangle.x - movingRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2
    && fixedRectangle.y - movingRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2
    
    ){
   return true;
  }
  
  else{
   return false;
  }

}


function bounceOff(object1, object2) {

  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2) {

      object1.velocityX = -1 * object1.velocityX;

    }

}