// layout
const winW = window.innerWidth
const winH = window.innerHeight
const CIR_SIZE = 200
const SIDES = 180
let seed
let x = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  // noLoop()
  stroke(255);
  strokeWeight(1);
  translate(windowWidth / 2, windowHeight / 2);
}

function draw() {
  background(0, 0, 0)
  strokeWeight(0.5);
  noFill();
  translate(windowWidth / 2, windowHeight / 2);

  //Draw circle
  ellipse(0, 0, CIR_SIZE / 1.5, CIR_SIZE / 1.5)
  for (let i = 0; i < 3; i++) {
    // line(0, 0, CIR_SIZE, 0)
  }
  //Ray Lines
  function simpleLines() {
    const stepsOut = CIR_SIZE / 4
    const numSteps = stepsOut
    const step = 2
    const start = CIR_SIZE / 2
    const stop = floor(random(start, numSteps + 1))
    let numbShapes = SIDES
    noFill()
    push()
    for (let i = 0; i < numbShapes; i++) {
      let randSpokeColor = random(0.5, 1);
      stroke(`rgba(0,255,0,${randSpokeColor})`);
      line(start, 0, floor(random(start, numSteps)) * step, 0)
      rotate(TWO_PI / numbShapes)
    }
    pop()
  }
  x = x + 0.1;
  if (x > width) {
    x = 0;
  }
  line(0, 0, 0, x);
  // simpleLines()

  //Helper Point on Circle
  function pointOnCircle(posX, posY, radius, angle) {
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
  }
  let numbShapes = randomSelectTwo() ? CIR_SIZE : CIR_SIZE;
  //Helper Random 1 or 2 for Spoke count
  function randomSelectTwo() {
    const rando = random(1)
    if (rando > 0.5) {
      return true
    } else {
      return false
    }
  }
}