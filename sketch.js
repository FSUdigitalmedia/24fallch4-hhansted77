

function preload(){
  cow = loadImage("assets/");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125);
  circle(width/2, height/2, 40);
  image(cow, 100, 150,);
}
