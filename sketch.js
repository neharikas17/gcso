
var car, wall
var speed, weight


function setup() {
  createCanvas(1200,400);
  wall = createSprite(1100, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(30,90);
  weight=random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  

if (car.x-wall.x < wall.width/2 + car.width/2
  && wall.x - car.x < wall.width/2 + car.width/2
  && car.y - wall.y < wall.height/2 + car.height/2
  && wall.y - car.y < wall.height/2 + car.height/2){
    car.shapeColor = "red";
    wall.shapeColor = "red";
  }
  else {
    car.shapeColor = "green";
    wall.shapeColor = "green";
  }

if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22500;
  if (deformation > 180)
  {
    car.shapeColor = color(255,0,0)
  }
  if(deformation<180 && deformation>100){
    car.shapeColor = color(230,230,0)
  }
  if(deformation<100){
    car.shapeColor = color(0,255,0)
  }
}

  drawSprites();
}