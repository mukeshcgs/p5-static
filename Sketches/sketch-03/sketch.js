

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

  const STEPS = 100
  let LINES = []


  for (let i = STEPS; i <= windowWidth - STEPS; i += STEPS) {
    let line = []
    for (let j = STEPS; j <= STEPS; j += STEPS) {
      var point = { x: j, y: i }
      line.push(point)
    }
    LINES.push(line)
  }
  strokeWeight(0.5);
  noFill();
  beginShape();
  for (let i = 0; i < LINES.length; i++) {
    vertex(LINES[i][0].x, LINES[i][0].y)
    for (let j = 0; j < LINES[i].length; j++) {
      console.log(LINES[i][j].x);
      console.log(LINES[i][j].y);
      const x = LINES[i][j].x
      const y = LINES[i][j].y
      const thisVertex = pointOnLine(x, y, STEPS);
      curveVertex(thisVertex.x, thisVertex.y);
    }
  }
  endShape()
  // function hexagon(posX, posY, cellSize) {
  //   strokeWeight(0.5);
  //   noFill();
  //   beginShape();
  //   for (let i = 0; i < grid.rows; i++) {
  //     for (let j = 0; j < 1; j++) {
  //       const x = i * cell.width
  //       const y = j * cell.height
  //       const thisVertex = pointOnLine(x, y, cellSize);
  //       vertex(thisVertex.x, thisVertex.y);
  //     }
  //   }
  //   endShape()
  // }
  // //Helper Point on Line
  function pointOnLine(posX, posY, STEPS) {
    let rand = random(1)
    const x = posX + STEPS * rand
    let y = posY + STEPS * rand
    return createVector(x, y)
  }
  // //Usage
  // hexagon(0, 0, cellSize)


}