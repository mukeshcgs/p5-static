

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

  createCanvas(windowWidth, windowHeight)
  stroke(255);
  strokeWeight(1);
  seed = random(0, 100)
}

function draw() {
  background(0, 0, 0)
  randomSeed(seed)
  for (let i = 0; i < windowHeight; i++) {
    for (let j = 0; j < grid.cols; j++) {
      const x = i * cell.width
      const y = j * cell.height
      ellipse(x, y, 1, 1)
      if (random(0, 1) > 0.5) {

        // line(x, y, x + cell.width, y + cell.height)
      } else {
        // line(x + cell.width, y, x, y + cell.height)
      }
    }

  }

}