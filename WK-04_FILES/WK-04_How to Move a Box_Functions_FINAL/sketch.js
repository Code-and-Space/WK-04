//  This was adapted from Dan Shiffman's Coding Train
//  See links 3.1, 3.2, 3.3
//  https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

let box01 = {
  rectX: 0,
  rectY: 0,
  rectWidth: 50,
  rectHeight: 50,
  transX: 300,
  transY: 300,
  speed: 3
}

// let boxX = 300;
// let speed = 3;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  rectMode(CENTER);

  moveBox(box01);
  trackingLines(box01);
}

function moveBox(incomingBox) {
  push();
  if (incomingBox.transX > width || incomingBox.transX < 0) {
    incomingBox.speed = incomingBox.speed*-1;
  }
  incomingBox.transX = incomingBox.transX + incomingBox.speed;
  translate(incomingBox.transX, 300, 50);
  displayBox(incomingBox);
  pop();
}

function displayBox(incomingBox) {
  noStroke();
  fill(255);
  rect(incomingBox.rectX, incomingBox.rectY, incomingBox.rectWidth, incomingBox.rectHeight);
}

function trackingLines(incomingGeometry) {
  stroke(255);
  strokeWeight(1.5)
  line(incomingGeometry.transX, 0, incomingGeometry.transX, height)
  line(0, incomingGeometry.transY, height, incomingGeometry.transY)
}
