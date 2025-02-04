let myMessage = "press any key if you are my pooki bear"

function setup() {
  createCanvas(400, 400);
  background(50);
  noStroke();
  fill(255);
  text(myMessage, 30, 50);
}
function draw() { 
}

function keyPressed(){
  fill("pink")
  ellipse(100,100,100,100)  
}