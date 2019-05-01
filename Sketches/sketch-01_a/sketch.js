// layout
const winW = 100
const winH = 100
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

function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }
}

let grid
function setup() {
  rectMode(CENTER)
  createCanvas(200, 200)
  stroke(255);
  strokeWeight(0);
  noLoop();
  make2DArray(20, 20)
}
let lineArray = [];

function draw() {
  background(0)
  let randNumCount = 0

  for (let i = 0; i < 1; i++) {
    lineArray[i] = []
    for (let j = 0; j < 5; j++) {
      const x = i * cell.width
      const y = j * cell.height
      let testRand = [0, 1]
      lineArray[i][j] = random(testRand)
      grid[i][j] = new cell();
      // console.log(lineArray[i][j]);
      // let randNum = random(testRand)
      // function checkLine(randNum, j) {
      //   if (randNum > 0) {
      //     push()
      //     translate(cell.width / 2, cell.width / 2);
      //     fill('#00eeff')
      //     ellipse(x, y, cellSize / 3, cellSize / 3)
      //     pop()
      //   } else {
      //     push()
      //     translate(cell.width / 2, cell.width / 2);
      //     fill('#ff0050');
      //     stroke(0)
      //     ellipse(x, y, cellSize / 3, cellSize)
      //     pop()
      //   }
      // }
      // checkLine(j, randNum)

    }
  }
}



      ////////////////////////////////////////////////////////////////

      // function is_increasing_digits_Sequence(num) {
      //   var arr_num = ('' + num).split('');
      //   for (var i = 0; i < arr_num.length - 1; i++) {
      //     if (parseInt(arr_num[i]) >= parseInt(arr_num[i + 1]))
      //       return false;
      //   }
      //   return true;
      // }
      // console.log(is_increasing_digits_Sequence(lineArray[i][j]));
      ////////////////////////////////////////////////////////////////
