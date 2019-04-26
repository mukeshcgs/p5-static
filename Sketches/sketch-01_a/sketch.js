// layout
const winW = window.innerWidth
const winH = window.innerHeight
const cellSize = 20
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
  rectMode(CENTER)
  createCanvas(windowWidth, windowHeight)
  stroke(255);
  strokeWeight(0);
  seed = random(0, 100)
}

function draw() {
  background(0)
  randomSeed(seed)

  for (let i = 0; i < windowHeight; i++) {
    for (let j = 0; j < grid.cols; j++) {
      const x = i * cell.width
      const y = j * cell.height
      // ellipse(x, y, 1, 1)
      if (random(0, 1) > 0.5) {
        push()
        translate(cell.width / 2, cell.width / 2);
        fill('#00eeff')
        ellipse(x, y, cellSize / 3, cellSize / 3)
        pop()
      } else {
        push()
        translate(cell.width / 2, cell.width / 2);
        fill('#ff0050')
        rect(x, y, cellSize, cellSize / 3);
        // ellipse(x, y, cellSize / 3, cellSize / 3)
        pop()
      }
    }

  }

}