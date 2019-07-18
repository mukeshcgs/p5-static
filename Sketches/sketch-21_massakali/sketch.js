// static-server
// http-server run this in root 

// layout
const winW = window.innerWidth
const winH = window.innerHeight
var font, fontS;
// Create a new array
let positions = [];
//Random Color select
// const PALLATE = ["#1be7ff", "#f8333c", "#8f2d56", "#6eeb83", "#e4ff1a"];
// const PALLATE = ["#333232", "#4c5454", "#f3a712", "#db2b39", "#447604"];
// const PALLATE = ["#30bced", "#d16014", "#e3e4db", "#23395b", "#050401"];
// const PALLATE = ["#26547c", "#ef476f", "#ffd166", "#23af82", "#fcfcfc"];
// const PALLATE = ["#a0006b", "#ffb533", "#f95c41", "#9ec630", "#ff959b"];
// const PALLATE = ["#28008a", "#ffffff", "#d20027"];
//ORANGE SHADES
const PALLATE = ["#900c3f", "#c70039", "#ffd166", "#ff5733", "#ffc300"];

// function setup() {
//   createCanvas(winW, winH);
//   // background(255, 245, 232);
//   // stroke(155, 142, 124);
//   // strokeWeight(0);
//   // noLoop()
//   noStroke();
//   // angleMode(DEGREES)
// }
// var randAngle = floor(random(360));
// var randRadius = random(20, 100)
// function draw() {
//   background(130);
//   positions.push({ x: mouseX, y: mouseY });

//   if (positions.length > 100) positions.shift();
//   for (let i = 0; i < positions.length; i++) {
//     let x = positions[i].x;
//     let y = positions[i].y;

//     var vertex = RandpointOnCircle(x, y, randRadius, randAngle)

//     ellipse(vertex.x, vertex.y, i / 2, i / 2);
//     ellipse(x, y, i / 2, i / 2);
//     fill(random(PALLATE))

//   }
// }

// function RandpointOnCircle(posX, posY, radius, angle) {
//   let x = posX + radius * cos(angle)
//   let y = posY + radius * sin(angle)
//   return createVector(x, y)
// }

// function mouseMoved() {
// }

let dragX, dragY, moveX, moveY;
var t;
var t2 = 0;
var easing = 0.05;
var xPos = 0.0;
var yPos = 0.0;
function setup() {
  createCanvas(winW, winH);
  noStroke();
}
function draw() {
  background(255);

  fill(0);
  ellipse(dragX, dragY, 33, 33); // Black circle
  ellipse(moveX, moveY, 33, 33); // Gray circle

  var targetX = mouseX;
  var targetY = mouseY;

  xPos += (targetX - xPos) * easing;
  yPos += (targetY - yPos) * easing;

  ellipse(mouseX, mouseY, 5, 5)
  ellipse(xPos, yPos, 40, 40)

}

// Move gray circle
function mouseMoved() {
  //   moveX = mouseX;
  //   moveY = mouseY;
  var targetX = mouseX;
  var targetY = mouseY;
  var randAngle = floor(random(360));
  var randRadius = random(20, 100)
  var outerVertex = RandpointOnCircle(targetX, targetY, randRadius, randAngle);
  ellipse(outerVertex.x, outerVertex.y, 5, 5)
  console.log(mouseX);

}
// function mouseDragged() { // Move black circle
//   dragX = mouseX;
//   dragY = mouseY;
// }

function RandpointOnCircle(posX, posY, radius, angle) {
  let x = posX + radius * cos(angle)
  let y = posY + radius * sin(angle)
  return createVector(x, y)
}