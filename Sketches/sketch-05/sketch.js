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
  ellipse(0, 0, CIR_SIZE / 1.6, CIR_SIZE / 1.5)


  for (let i = 0; i < 3; i++) {
    // line(0, 0, CIR_SIZE, 0)
  }  

  // x = x + 0.1;
  if (x > width) {
    x = 0;
  }
  line(0, 0, 0, x);
  // simpleLines()

 
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


// layout
// const winW = window.innerWidth
// const winH = window.innerHeight
// const cellSize = 40
// const grid = {
//   rows: winH / cellSize,
//   cols: winW / cellSize
// }
// const cell = {
//   width: cellSize,
//   height: cellSize
// }
// let seed
// function setup() {

//   createCanvas(windowWidth, windowHeight)
//   stroke(255);
//   strokeWeight(1);
//   seed = random(0, 100)
// }

// function draw() {
//   background(0, 0, 0)
//   randomSeed(seed)
//   for (let i = 0; i < windowHeight; i++) {
//     for (let j = 0; j < grid.cols; j++) {
//       const x = i * cell.width
//       const y = j * cell.height
//       ellipse(x, y, 1, 1)
//       if (random(0, 1) > 0.5) {

//         line(x, y, x + cell.width, y + cell.height)
//       } else {
//         line(x + cell.width, y, x, y + cell.height)
//       }
//     }

//   }

}