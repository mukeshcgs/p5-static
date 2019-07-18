// static-server
// http-server run this in root 

// layout
const winW = window.innerWidth
const winH = window.innerHeight
var font, fontS;
var vehicles = [];
var SIZE = 500;
//Random Color select
// const PALLATE = ["#1be7ff", "#f8333c", "#8f2d56", "#6eeb83", "#e4ff1a"];
// const PALLATE = ["#333232", "#4c5454", "#f3a712", "#db2b39", "#447604"];
// const PALLATE = ["#30bced", "#d16014", "#e3e4db", "#23395b", "#050401"];
const PALLATE = ["#26547c", "#ef476f", "#ffd166", "#23af82", "#fcfcfc"];
// const PALLATE = ["#a0006b", "#ffb533", "#f95c41", "#9ec630", "#ff959b"];
// const PALLATE = ["#28008a", "#ffffff", "#d20027"];
//ORANGE SHADES
// const PALLATE = ["#900c3f", "#c70039", "#ffd166", "#ff5733", "#ffc300"];

function setup() {
  createCanvas(600, 600);
  // background(255, 245, 232);
  stroke(155, 142, 124);
  strokeWeight(1);
  noLoop()
  angleMode(DEGREES)
}

var newPos = { x: 300, y: 300 };

function draw() {
  var posX = newPos.x;
  var posY = newPos.y;
  // var posX = floor(random(100, width - 100))
  // var posY = floor(random(100, height - 100))
  background(0);
  for (let x = 0; x < 50; x++) {
    var randAngle = floor(random(0, 7)) * 45
    var randRadius = random(20, 300)
    stroke(155, 142, 124);
    noFill()
    push()
    fill(random(PALLATE))
    noStroke()
    ellipse(posX, posY, randRadius / 6, randRadius / 6)
    pop()
    var outerVertex = RandpointOnCircle(posX, posY, randRadius / 2, randAngle)
    if (outerVertex.x < 100) {
      outerVertex = RandpointOnCircle(posX, posY, randRadius / 2, randAngle)
    }
    if (outerVertex.y < 100) {
      outerVertex = RandpointOnCircle(posX, posY, randRadius / 2, randAngle)
    }
    if (outerVertex.x > width - 100) {
      outerVertex = RandpointOnCircle(posX, posY, randRadius / 2, randAngle)
    }
    if (outerVertex.y > height - 100) {
      outerVertex = RandpointOnCircle(posX, posY, randRadius / 2, randAngle)
    }
    line(posX, posY, outerVertex.x, outerVertex.y)
    point(outerVertex.x, outerVertex.y);
    posX = outerVertex.x;
    posY = outerVertex.y;
  }
}



function RandpointOnCircle(posX, posY, radius, angle) {
  let x = posX + radius * cos(angle)
  let y = posY + radius * sin(angle)
  return createVector(x, y)
}