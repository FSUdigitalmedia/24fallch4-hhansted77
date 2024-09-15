let theFont;
//let textRotate = frameCount * -1;
//fuck the aforementioned failed let function, don't work LOL
let deg = 0;

function preload(){
  cow = loadImage("assets/cow clipart.png");
  theFont = loadFont("assets/gomarice_yatsurano_western.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(theFont);
  textSize(100);
}

function draw() {
  background(144, 213, 255);


  rect(0, 300, windowWidth, 600);
  stroke(0);//line for text
 fill(176, 47, 0); //for some reason this is text color


  image(cow, windowWidth/2, 170,);

push();
translate(200,400);
degMapped = map2(deg, 0, 45, 0, 45, SINUSOIDAL, BOTH); //how the hell do I get this to stop at 45 degree
rotate(-radians(degMapped)); //if i try to do the textRotate function it kills the text and rectangle
 //ADDING A - BEFORE RADIANS REVERSES IT やったー！！！
 deg = (deg + 1) % 45;

text("CowTipping", 0, 0);
pop();



  stroke(255, 168, 46);
  fill("orange"); //and this is the rectangle, if you swap position
                  //you get the rectangle dark red and the text as orange
}
