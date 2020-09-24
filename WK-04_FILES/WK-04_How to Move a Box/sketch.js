//  This was adapted from Dan Shiffman's Coding Train
//  See links 3.1, 3.2, 3.3
//  https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

let boxX = 300;
let speedX = 1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  rectMode(CENTER);

  fill(255)
  noStroke()
  push()
  if (boxX > width || boxX < 0) {
    speedX = speedX*-1;
  }
  boxX = boxX + speedX;
  translate(boxX, 300, 50)
  rect(0, 0, 50, 50);
  pop()
}
