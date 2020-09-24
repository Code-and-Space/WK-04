let circle01 = {
  color: 0,
  transX: 400, // these are translate functions
  transY: 600, // these are translate functions
  speedX: 4,
  speedY: 4,
  ellipseX: 0, // these are ellipse functions
  ellipseY: 0, // these are ellipse functions
  ellipseDiameter: 80
}

let box01 = {
  color: 0,
  transX: 400,
  transY: 450,
  speedX: -1,
  speedY: 2,
  boxX: 0,
  boxY: 0,
  boxWidth: 80,
  boxHeight: 300
}

let circle02 = {
  color: 255,
  transX: 400, // these are translate functions
  transY: 600, // these are translate functions
  speedX: -2,
  speedY: -4,
  ellipseX: 0, // these are ellipse functions
  ellipseY: 0, // these are ellipse functions
  ellipseDiameter: 40
}

let box02 = {
  color: 255,
  transX: 400,
  transY: 470,
  speedX: -2,
  speedY: -1,
  boxX: 0,
  boxY: 0,
  boxWidth: 5,
  boxHeight: 270
}

let circle03 = {
  color: 0,
  transX: 400, // these are translate functions
  transY: 250, // these are translate functions
  speedX: -2,
  speedY: 1,
  ellipseX: 0, // these are ellipse functions
  ellipseY: 0, // these are ellipse functions
  ellipseDiameter: 150
}

let box03 = {
  color: 255,
  transX: 380,
  transY: 220,
  speedX: -2,
  speedY: -1,
  boxX: 0,
  boxY: 0,
  boxWidth: 60,
  boxHeight: 110,
  cornerRadius: 10,
  rotateAngle: 151,
}

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER)
  angleMode(DEGREES);
}

function draw() {
  background(255);
  noStroke();

  //bottom black circle
  drawCircle(circle01);
  tracingObject(circle01);

  noStroke()
  //black handle rectangle
  drawBox(box01);
  tracingBoxObject(box01);

  //bottom white circle
  drawCircle(circle02);
  tracingObject(circle02);

  //white thin handle part
  drawBox(box02);
  tracingBoxObject(box02);

  //wrench head circle
  drawCircle(circle03);
  tracingObject(circle03);

  //angled wrench head
  drawAngledBox(box03);
  tracingAngledBox(box03);
}

function drawCircle(incomingCircle) {
  fill(incomingCircle.color);
  push()
  if (incomingCircle.transX > width || incomingCircle.transX < 0) {
    incomingCircle.speedX = incomingCircle.speedX*-1;
  }
  incomingCircle.transX = incomingCircle.transX + incomingCircle.speedX;
  if (incomingCircle.transY > height || incomingCircle.transY < 0) {
    incomingCircle.speedY = incomingCircle.speedY*-1;
  }
  incomingCircle.transY = incomingCircle.transY + incomingCircle.speedY;
  translate(incomingCircle.transX, incomingCircle.transY)
  ellipse(incomingCircle.ellipseX, incomingCircle.ellipseY, incomingCircle.ellipseDiameter, incomingCircle.ellipseDiameter);
  pop()
}

function tracingObject(incomingCircle) {
  stroke('red') // Give a white color
  line(incomingCircle.transX, 0, incomingCircle.transX, height)
  line(0, incomingCircle.transY, width, incomingCircle.transY)
}

function drawBox(incomingBox) {
  fill(incomingBox.color);
  push()
  if (incomingBox.transX > width || incomingBox.transX < 0) {
    incomingBox.speedX = incomingBox.speedX*-1;
  }
  incomingBox.transX = incomingBox.transX + incomingBox.speedX;
  if (incomingBox.transY > height || incomingBox.transY < 0) {
    incomingBox.speedY = incomingBox.speedY*-1;
  }
  incomingBox.transY = incomingBox.transY + incomingBox.speedY;
  translate(incomingBox.transX, incomingBox.transY)
  rect(incomingBox.boxX, incomingBox.boxY, incomingBox.boxWidth, incomingBox.boxHeight);
  pop()
}

function tracingBoxObject(incomingBox) {
  stroke('red') // Give a white color
  line(incomingBox.transX, 0, incomingBox.transX, height)
  line(0, incomingBox.transY, width, incomingBox.transY)
}

function drawAngledBox(incomingBox) {
  fill(incomingBox.color);
  push()
  if (incomingBox.transX > width || incomingBox.transX < 0) {
    incomingBox.speedX = incomingBox.speedX*-1;
  }
  incomingBox.transX = incomingBox.transX + incomingBox.speedX;
  if (incomingBox.transY > height || incomingBox.transY < 0) {
    incomingBox.speedY = incomingBox.speedY*-1;
  }
  incomingBox.transY = incomingBox.transY + incomingBox.speedY;
  translate(incomingBox.transX, incomingBox.transY)
  rotate(incomingBox.rotateAngle)
  rect(incomingBox.boxX, incomingBox.boxY, incomingBox.boxWidth, incomingBox.boxHeight, incomingBox.cornerRadius);
  pop()
}

function tracingAngledBox(incomingBox) {
  stroke('red') // Give a white color
  push()
  translate(incomingBox.transX, incomingBox.transY)
  rotate(incomingBox.rotateAngle)
  line(0, -height, 0, height)
  line(-width, 0, width, 0)
  pop()
}
