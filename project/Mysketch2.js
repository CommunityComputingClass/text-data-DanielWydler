
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
  heart(random (0,450),random(0,450),) 
}
function heart(x,y) {
  fill("pink")
  circle(x, y, 50)
  fill("Pink")
  circle(x-50, y, 50)
  fill("pink")
  triangle(x-73, y+6, x+21, y+3, x-24, y+77)
}