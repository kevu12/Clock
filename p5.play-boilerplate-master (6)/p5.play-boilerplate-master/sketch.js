function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hr=hour
  mn=minute
  sc=second
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255); 
  
  map()

  drawSprites();
}
function map(){
scAngle=map(sc,0,60,0,360)
mnAngle=map(mn,0,60,0,360)
hrAngle=map(hr,0,60,0,360)
}
