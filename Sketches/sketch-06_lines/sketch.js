// layout
const winW = window.innerWidth
const winH = window.innerHeight
let seed
function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight)
  stroke(255);
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
function draw() {
  background(0, 0, 0)
  //DRAW GRID
  grids(100);
  console.log(mouseX);

  stroke(255);
  for (let i = 0; i < lineCount; i++) {
    let randPosY = random(100, winH - 100);
    console.log(randPosY);

    randPosArray.push(floor(randPosY));
    // console.log(randPosArray);
    line(0, randPosY, winW, randPosY)
    for (let i = 0; i < dotCountOnLine; i++) {
      randPointOnLine(randPosY);
    }
  }
}