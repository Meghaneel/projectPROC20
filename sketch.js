var car, wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);

  speed.random(55,90);
  weight.random(400,1500);

  car = createSprite(50, 200, 50, 50);
  wall = reatesprite(1500,200,60,height/2);
  wall.shapeColor= "grey";

}

function draw() {
  background(0,0,0);  
  
  drawSprites();
}