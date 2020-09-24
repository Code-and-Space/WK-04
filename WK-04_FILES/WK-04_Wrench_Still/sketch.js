function setup() {
  createCanvas(800, 800);
  rectMode(CENTER)
  angleMode(DEGREES);
}

function draw() {
  background(255);
  noStroke();

  //bottom black circle
  fill(0);
  ellipse(400, 600, 80, 80);

  //black handle rectangle
  fill(0);
  rect(400, 450, 80, 300);

  //bottom white circle
  fill(255);
  ellipse(400, 600, 40, 40);

  //white thin handle part
  fill(255);
  rect(400, 470, 5, 270);

  //wrench head circle
  fill(0);
  ellipse(400, 250, 150, 150);

  //angled wrench head
  fill(255);
  translate(380, 220);
  angleMode(DEGREES);
  rotate(151);
  rect(0, 0, 60, 110, 10);
}
