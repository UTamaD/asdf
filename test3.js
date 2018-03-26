function setup() {
  createCanvas(640, 480);
  stroke(255);

}

function draw() {
  fill(mouseX,200,mouseY);
  background(mouseX,mouseY,100);
  ellipse(mouseX, mouseY, mouseX,mouseY);  
  
}