// static-server
// http-server run this in root 
// http://127.0.0.1:8080/Sketches/sketch-10_steering/
// http://127.0.0.1:8080/Sketches/sketch-10_steering/
// http://10.132.180.61:8080/Sketches/sketch-10_steering/
// http://10.211.55.2:8080/Sketches/sketch-10_steering/
// http://10.37.129.2:8080/Sketches/sketch-10_steering/

// layout
let borderColor = 0;
let borderSize = 4;
let dateString = "29 May 2019";
let sketchName = "P-012";

//Global variables
const winW = window.innerWidth
const winH = window.innerHeight
var font, fontS;
var vehicles = [];
var t;
var t2 = 0;
var easing = 0.05;
var xPos = 0.0;
var yPos = 0.0;
var N = 0,
  NE = 1,
  E = 2,
  SE = 3,
  S = 4,
  SW = 5,
  W = 6,
  NW = 7,
  posX,
  posY;
var stepsize = 1;
var diameter = 2;

function preload() {
  // font = loadFont('fonts/Krutidev_040_bo ld.TTF')
  fontS = loadFont('fonts/DV_ME_Shree0709.TTF');
  // font = loadFont('fonts/Arvo/Arvo-Regular.TTF');
  // font = loadFont('fonts/Arvo/Arvo-Bold.TTF');
  // font = loadFont('fonts/Domine/Domine-Regular.TTF');
  // font = loadFont('fonts/Domine/Domine-Bold.TTF');
  font = loadFont('fonts/Prata/Prata-Regular.TTF');
  // font = loadFont('fonts/Questrial/Questrial-Regular.TTF');
  // font = loadFont('fonts/Vidaloka/Vidaloka-Regular.TTF');
}
function setup() {
  createCanvas(600, 600);
  // createCanvas(736, 1040); //Poster size
  background(255);
  // background(193,215,128);
  // stroke(3);
  strokeWeight(0);
  posX = width / 2;
  posY = height / 2;

}
function draw() {
  // background(220);
  // background(0);
  for (let i = 0; i <= mouseX; i++) {
    dir = int(random(0, 8));
    if (dir == N) {
      posY -= stepsize;
    } else if (dir == NE) {
      posX += stepsize;
      posY -= stepsize;
    } else if (dir == E) {
      posX += stepsize;
    } else if (dir == SE) {
      posX += stepsize;
      posY += stepsize;
    } else if (dir == S) {
      posX += stepsize;
    } else if (dir == SW) {
      posX -= stepsize;
      posY += stepsize;
    } else if (dir == W) {
      posX -= stepsize;
    } else if (dir == NW) {
      posX -= stepsize;
      posY -= stepsize;
    }

    if (posX > winW) {
      posX = 0;
    }
    if (posX < 0) posX = winW;
    if (posY < 0) posY = winH;
    if (posY > winH) posY = 0;
    fill(random(255), 0, 0)
    ellipse(posX + stepsize / 2, posY + stepsize / 2, diameter, diameter);

  }
  // Example 01
  // noFill();
  // push();
  // var sign = new Signature(borderColor, borderSize, dateString, sketchName);
  // sign.show();
  // pop();
  // var targetX = mouseX;
  // var targetY = mouseY;

  // xPos += (targetX - xPos) * easing;
  // yPos += (targetY - yPos) * easing;
  // ellipse(mouseX, mouseY, 20, 20)
  // ellipse(xPos, yPos, 40, 40)

}
function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas("timestamp", 'png');
  if (keyCode == DELETE || keyCode == BACKSPACE) clear();
}

