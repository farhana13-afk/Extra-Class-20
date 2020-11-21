var block1;
var block2;





function setup() {
  createCanvas(400,400);
 block1= createSprite(200, 200, 50, 50);
 block1.shapeColor= "white";
 block2 = createSprite(100,200,50,50);
 block2.shapeColor= "white";
}

function draw() {
  background("black");  
block2.x = mouseX;
block2.y = mouseY;

if (isTouching(block1, block2)){
  block1.shapeColor= rgb( Math.round(random(0,255)), Math.round(random(0,255)), Math.round(random(0,255)) );
  block2.shapeColor= rgb( Math.round(random(0,255)), Math.round(random(0,255)), Math.round(random(0,255)) );
} else {
  block1.shapeColor = "white";
  block2.shapeColor = "white";
}


  drawSprites();
}