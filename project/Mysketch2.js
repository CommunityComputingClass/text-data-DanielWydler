
let myMessage = "press any key if you are my pooki bear"

function setup() {
  createCanvas(400, 400);
  background(50);
  noStroke();
  fill(255);
  text(myMessage, 100, 50);
}
function draw() { 
  fill (50)
  text ("i love you pooki bear", 100, 100, 100)
}

function keyPressed(){
  fill("pink")
  ellipse(random (0,450),random(0,450),random (10,100))  
}