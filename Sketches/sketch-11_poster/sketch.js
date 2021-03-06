// static-server


// layout
const winW = window.innerWidth
const winH = window.innerHeight
var font, fontS;
var vehicles = [];


function setup() {
  // createCanvas(800, 800);
  createCanvas(736, 1040);
  background(255);
  // background(193,215,128);
  stroke(0);
  strokeWeight(1);
  noLoop();
  angleMode(DEGREES);

}
let borderColor = 0;
let borderSize = 4;
let dateString = "28 May 2019";
let sketchName = "P-00";
function draw() {
  // background(220);
  // background(0);
  push();
  var sign = new Signature(borderColor, borderSize, dateString, sketchName);
  sign.show();
  pop();

  let cx = width / 2;
  let cy = height / 2;
  let r = width / 3 * 0.5;
  push();
  translate(cx, cy);
  rotate(45);
  let sep = 30;
  let ox = -r + r / sep / 4;
  for (let x = ox; x < r; x += r / sep) {
    let y = sqrt(sq(r) - sq(x));
    line(x, y, x, -y);
  }
  pop();

  ///////////////////
  const cols = 4;
  const offset = 40;

  // for (let i = 0; i < cols; i++) {
  //   let x = map(i, 0, cols, offset, width - offset);
  //   let y = map(i, 0, rows, offset, height - offset);
  //   push();
  //   translate(x, y);
  //   point(0, 0);
  //   let n = floor(random(3, 99));
  //   drawPattern(x, y, w, h, n);
  //   pop();
  // }
  push()
  translate(width / 2, height / 2);
  drawPattern(0, 0, 100, 300, 15);
  pop()
}
function drawPattern(_x, _y, _w, _h, _n) {
  for (let j = 0; j <= _h; j++) {
    for (let i = 0; i <= _w; i++) {
      let m = j * _w + i;
      if (m % _n == 0) {
        strokeWeight(1.5);
        point(i, j);
      }
    }
  }
}
