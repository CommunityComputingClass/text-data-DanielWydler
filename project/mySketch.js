function preload(){
  myFont = loadFont("StretchPro.otf")
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("blue");
  fill("red")
  noStroke (0)
  text("Hello I love you pooki bear", 100, 150);
  textSize (20)
  fill("pink")
  circle(200, 200, 50)
  fill("Pink")
  circle(150, 200, 50)
  fill("pink")
  triangle(127, 206, 221, 203, 176, 277)
}