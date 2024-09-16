let theFont;
//let textRotate = frameCount * -1;
//fuck the aforementioned failed let function, don't work LOL
let deg = 0;
let x = 0;
let speed = 3;


function preload(){
  cow = loadImage("assets/cow clipart.png");
  theFont = loadFont("assets/gomarice_yatsurano_western.ttf");
  tmblwd = loadImage("assets/tumbleweed.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(theFont);
  textSize(100);
  imageMode(CENTER);
}

function draw() {
  background(144, 213, 255);


  rect(0, 300, windowWidth, 600);
  stroke(0);//line for text
 fill(176, 47, 0); //for some reason this is text color

push();
translate(windowWidth * .55, 350);
degMapped = map2(deg, 0, 55, 0, 55, SINUSOIDAL, BOTH);
rotate(radians(degMapped));
deg = (deg + .5) % 55;
  image(cow, 0, 0);
  pop();
 



push();
translate(200,400);
degMapped = map2(deg, 0, 45, 0, 45, SINUSOIDAL, BOTH); //how the hell do I get this to stop at 45 degree
rotate(-radians(degMapped)); //if i try to do the textRotate function it kills the text and rectangle
 //ADDING A - BEFORE RADIANS REVERSES IT やったー！！！
 deg = (deg + .5) % 45;

text("CowTipping", 0, 0);
pop();



  stroke(255, 168, 46);
  fill("orange"); //and this is the circle
                  
push();
translate (0, 530);
let d = map(mouseX, 0, windowWidth, 50, 150, true);
let xPos = map2(x, 0, width, 0, width, SINUSOIDAL, BOTH);
ellipse(xPos, 0, d);

if (x > windowWidth || x < 0) {
  speed = speed * -1;
}
x = x + speed;
image(tmblwd, xPos, d);

pop();

//fill("orange"); //this is the rectangle?? apparently
}
