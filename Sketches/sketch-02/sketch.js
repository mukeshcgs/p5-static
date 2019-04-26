// layout & global
const winW = window.innerWidth
const winH = window.innerHeight

const CELL_SIZE = 50
const GRID = {
  rows: winH / CELL_SIZE,
  cols: winW / CELL_SIZE
}
let vertexArray = []
let COLORS = []
let seed
function setup() {
  createCanvas(windowWidth, windowHeight)
  // noLoop()
  stroke(255);
  strokeWeight(1);
  seed = random(0, 10)
  translate(windowWidth / 2, windowHeight / 2);
}

function draw() {
  background(0, 0, 0)
  randomSeed(seed)
      for (let i = 0; i < GRID.cols; i++) {
        COLORS[i] = []
        for (let j = 0; j < GRID.rows; j++) {
          COLORS[i][j]=random(10,150)
        }
      }

  for (let i = 0; i < GRID.cols; i++) {
    for (let j = 0; j < GRID.rows; j++) {
      const x = i * CELL_SIZE
      const y = j * CELL_SIZE
      // strokeWeight(0.5);
      noStroke()
      fill(COLORS[i][j])
      // point(x, y);
      beginShape(POINTS);
      // vertex(x, y);
      endShape();
      ellipse(x, y, 3, 3);
      // rect(x, y, 30, 30)
    }
  }
}