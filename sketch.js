var movingRect, fixedRect;
var leftRect, rightRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,200,80,30);
  movingRect = createSprite(200, 100, 50, 80);

  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;

  gameObject1.shapeColor = "blue";
  gameObject2.shapeColor = "blue";
  gameObject3.shapeColor = "blue";
  gameObject4.shapeColor = "blue";

  leftRect = createSprite(100,400,50,80);
 leftRect.shapeColor = "green";
 rightRect = createSprite(1100,400,50,80);
 rightRect.shapeColor = "green";
 
  leftRect.velocityX = 5;
  rightRect.velocityX = -5;
}



function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  var value = isTouching(movingRect, gameObject1);

  if(value === true)
  {
  gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else if(value === false)
  {
    gameObject1.shapeColor = "blue";
    movingRect.shapeColor = "green";
  }
  bounce_off( leftRect, rightRect)
  drawSprites();
}

