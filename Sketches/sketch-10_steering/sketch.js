// static-server
// http-server

var font;

function preload() {
  // font = loadFont('Krutidev_040_bo ld.TTF')
  font = loadFont('DV_ME_Shree0709.TTF')
}

function setup() {
  background(51)
  noLoop();
  createCanvas(400, 400)
  stroke(255);
  strokeWeight(1);
  textFont(font);
  textSize(150);
  // text('kj', 10, 100);
  var points = font.textToPoints('k', 10, 100);
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    stroke(0);
    strokeWeight(4);
    point(pt.x, pt.y)
  }
}

function draw() {

}