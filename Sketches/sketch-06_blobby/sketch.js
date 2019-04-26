

// layout
const winW = window.innerWidth
const winH = window.innerHeight
const cellSize = 40
const grid = {
  rows: winH / cellSize,
  cols: winW / cellSize
}
const cell = {
  width: cellSize,
  height: cellSize
}
let seed
function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight)
  stroke(255);
  strokeWeight(1);
  // seed = random(0, 10)
}

function draw() {
  background(0, 0, 0)
  // randomSeed(seed)
  //GRID
  for (let i = 0; i < windowHeight; i++) {
    for (let j = 0; j < grid.cols; j++) {
      const x = i * cell.width
      const y = j * cell.height
      point(x, y, 1, 1)
      if (random(0, 1) > 0.5) {
        // line(x, y, x + cell.width, y + cell.height)
      } else {
        // line(x + cell.width, y, x, y + cell.height)
      }
    }
  }

  //Blobby
  push()
  translate(winW / 2, winH / 2)
  // noFill()
  let radius = 200
  let xOff = 0
  beginShape()
  for (var a = 0; a < TWO_PI; a += 0.01) {
    var offset = map(noise(xOff), 0, 1, -5, 5);
    radius = radius + offset
    let xPos = radius * cos(a)
    let yPos = radius * sin(a)
    vertex(xPos, yPos)
    ellipse(xPos, yPos, 5, 5)
    xOff += 0.01
  }
  endShape()
  pop()
}