var bullet, wall, speed,weight, thickness;
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  
  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = color(80,80,80);

  bullet = createSprite(100,200,60,3);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  
  
}

function draw() {
  background(0);  
  var damage;
  console.log(wall.x - bullet.x);
  //car.collide(wall);
 if(wall.x - bullet.x < wall.width/2 + bullet.width/2){
   bullet.velocityX = 0; 
    damage = (0.5* weight * speed * speed )/(thickness*thickness*thickness);
    if (damage > 10){
      wall.shapeColor = color(255,0,0);
      bullet.x = wall.x + wall.width/2;
    }
    else {
      wall.shapeColor = color(0,255,0);
      bullet.x = wall.x - wall.width/2 - bullet.width/2;
    }
    
    
  }
  drawSprites();
}