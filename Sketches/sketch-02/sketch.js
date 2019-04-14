

// layout
const winW = 600
const winH = 400
const cellSize = 60
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
  noLoop()
  stroke(255);
  strokeWeight(1);
  seed = random(0, 100)
  translate(windowWidth / 2, windowHeight / 2);
}

function draw() {
  background(0, 0, 0)
  randomSeed(seed)

  function hexagon(posX, posY, cellSize) {
    strokeWeight(0.5);
    noFill();
    beginShape();
    for (let i = 0; i < grid.rows; i++) {
      for (let j = 0; j < 1; j++) {
        const x = i * cell.width
        const y = j * cell.height
        const thisVertex = pointOnLine(x, y, cellSize);
        vertex(thisVertex.x, thisVertex.y);
      }
    }
    endShape()
  }
  //Helper Point on Line
  function pointOnLine(posX, posY, cellSize) {
    let rand = random(1)
    const x = posX + cellSize
    let y = posY + cellSize * rand
    return createVector(x, y)
  }
  //Usage
  hexagon(0, 0, cellSize)


}