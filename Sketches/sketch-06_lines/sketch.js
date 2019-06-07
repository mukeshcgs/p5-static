
// layout
const winW = window.innerWidth
const winH = window.innerHeight

// Signature paramaters
let borderColor = 0;
let borderSize = 4;
let dateString = "29 May 19";
let sketchName = "P-012";


function preload() {
  // font = loadFont('fonts/Krutidev_040_bo ld.TTF')
  fontS = loadFont('../fonts/DV_ME_Shree0709.TTF');
  // font = loadFont('fonts/Arvo/Arvo-Regular.TTF');
  // font = loadFont('fonts/Arvo/Arvo-Bold.TTF');
  // font = loadFont('fonts/Domine/Domine-Regular.TTF');
  // font = loadFont('fonts/Domine/Domine-Bold.TTF');
  font = loadFont('../fonts/Prata/Prata-Regular.TTF');
  // font = loadFont('fonts/Questrial/Questrial-Regular.TTF');
  // font = loadFont('fonts/Vidaloka/Vidaloka-Regular.TTF');
}

// GLOBAL VARIABLE
let randPosArray = [];
let lineCount = 3;
let dotCountOnLine = 1;

function randPointOnLine(lineStart, lineEnd) {
  let randPosX = floor(random(150, winW - 150));
  ellipse(randPosX, lineStart, 2, 2)
  push()
  noFill();
  stroke(255, 0, 0, 50)
  let ransRadius = [];

  // for (let i = 0; i < randPosArray.length; i++) {
  for (let j = 0; j < randPosArray.length; j++) {
    let sum = randPosArray[0] - randPosArray[j]
    ransRadius.push(Math.abs(sum) * 2);
    ellipse(randPosX, lineStart, sum * 2, sum * 2)
  }
  // }

  // let ransRadius = floor(random(randPosArray));
  // ellipse(randPosX, lineStart, ransRadius / 2, ransRadius / 2)

  pop()
  // console.log(ransRadius);

  let thisVertex = pointOnCircle(randPosX, lineStart, 100, random(TWO_PI));
  line(randPosX, lineStart, thisVertex.x, thisVertex.y)
}
var numPoints = 30;
var points = [numPoints]
var shapePosArray = []
var shapeSize = 3

function setup() {
  noLoop();
  createCanvas(600, 600)
  stroke(51);
  for (let i = 0; i < numPoints; i++) {
    // Randome point on circle
    const rotAngle = random(TWO_PI);
    // number of points on circle
    // const rotAngle = TWO_PI/numPoints; 
    const thisVertex = pointOnCircle(0, 0, 200, i * rotAngle);

    // points[i] = new p5.Vector(random(width),random(height));

    // shape(0, 0, 200, i * rotAngle, 3)
    points[i] = new p5.Vector(floor(thisVertex.x), floor(thisVertex.y));
    push()
    translate(600 / 2, 600 / 2);
    ellipse(floor(thisVertex.x), floor(thisVertex.y), 10, 10)
    pop()

  }
  push()
  stroke(0, 255, 0)

  noFill()
  translate(600 / 2, 600 / 2);
  shape(0, 0, 200, shapeSize);
  console.log(shapePosArray);
  pop()
}

function draw() {
  // background(255)
  //DRAW GRID
  grids(20);
  //Signature
  var sign = new Signature("#cccccc", borderSize, dateString, sketchName);
  sign.show();
  // let numPoints = int(map(mouseX, 0, width, 6, 60));

  // stroke(255);
  // for (let i = 0; i < lineCount; i++) {
  // let randPosY = random(100, winH - 100);
  // randPosArray.push(floor(randPosY));
  // console.log(randPosArray);
  // line(0, randPosY, winW, randPosY)
  // for (let i = 0; i < dotCountOnLine; i++) {
  // randPointOnLine(randPosY);
  // }
  // }
  translate(600 / 2, 600 / 2);

  for (let i = 0; i < numPoints; i++) {
    for (let j = 0; j <= i; j++) {
      if (j != i) {
        let dst = int(dist(points[i].x, points[i].y, points[j].x, points[j].x));
        if (dst < 50) {
          strokeWeight(1);
          stroke(12, 27, 51);
          ellipse(points[i].x, points[i].y, 4, 4)
          line(points[i].x, points[i].y, points[j].x, points[j].y);
        } else if (dst < 100) {
          strokeWeight(0.5);
          stroke(126, 6, 0);
          ellipse(points[i].x, points[i].y, 4, 4)
          line(points[i].x, points[i].y, points[j].x, points[j].y);
        } else if (dst < 200) {
          strokeWeight(0.3);
          stroke(253, 96, 1);
          ellipse(points[i].x, points[i].y, 4, 4)
          line(points[i].x, points[i].y, points[j].x, points[j].y);
        } else if (dst < 250) {
          strokeWeight(0.2);
          stroke(7, 17, 37);
          ellipse(points[i].x, points[i].y, 4, 4)
          line(points[i].x, points[i].y, points[j].x, points[j].y);
        } else {
          strokeWeight(0.001);
          stroke(0, 0, 0);
          ellipse(points[i].x, points[i].y, 4, 4)
          line(points[i].x, points[i].y, points[j].x, points[j].y);
        }
      }
    }
  }
}