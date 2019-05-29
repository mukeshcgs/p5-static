

// layout
const winW = window.innerWidth
const winH = window.innerHeight

var yoff = 0.0;
function setup() {
  // noLoop();
  createCanvas(windowWidth, windowHeight)
  stroke(255);
  strokeWeight(1);
}
let radius = 200

function draw() {
  background(0)
  //Blobby
  translate(winW / 2, winH / 2)
  noFill()
  let xOff = 0;
  beginShape()
  var xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.01) {
    var offset = map(noise(xoff, yoff), 0, 1, -25, 25);
    var r = radius + offset;
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
    xoff += 0.1;
    //ellipse(x, y, 4, 4);
  }
  endShape();
  yoff += 0.01;
}