// layout
const winW = window.innerWidth
const winH = window.innerHeight
const cellSize = 50
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
  seed = random(0, 100)
}

function draw() {
  background(0, 0, 0)
  //DRAW GRID
  // grids(40);
  randomSeed(seed)
  for (let i = 0; i < windowHeight; i++) {
    let prevY, nextY;
    prevY = 0
    let lineSpace = floor(random(cell.width / 2, cell.width))
    for (let j = 0; j < windowWidth; j++) {
      const x = j * cell.width
      const y = i * lineSpace
      nextY = y;
      prevY = nextY - prevY;
      prevY = nextY
      console.log(y);
      ellipse(x, y, 1, 1)
      // line(x, y, x + cell.height, y)
      if (random(0, 1) > 0.5) {
        // beginShape();
        // vertex(x, y);
        // vertex(x + cell.height / 2, - prevY)
        // vertex(x + cell.height, y);
        // endShape(CLOSE);
      } else {
        // line(x + cell.width, y, x, y + cell.height)
      }
    }
  }
  // for (let i = 0; i < windowHeight; i++) {
  //   let lineSpace = floor(random(cell.width / 2, cell.width))
  //   for (let j = 0; j < windowWidth; j++) {
  //     const x = i * cell.width
  //     const y = j * lineSpace
  //     ellipse(x, y, 1, 1)
  //     line(x, y, x + cell.height, y)
  //   }
  // }

}