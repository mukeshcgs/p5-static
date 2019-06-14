// static-server
// http-server run this in root 
// http://127.0.0.1:8080/Sketches/sketch-10_steering/

// layout
let borderColor = 255;
let borderSize = 4;
let dateString = "29 May 19";
let sketchName = "VORONOI-01";

//Global variables
const winW = window.innerWidth
const winH = window.innerHeight

var ngon = 4;
var ngonRadius = 100;
var spot = { x: 50, y: 30 };
var clo = { r: 240, g: 0, b: 255 };

function setup() {
  createCanvas(600, 600);
  // createCanvas(736, 1040);
  // background(255);
  background(193, 215, 128);
  stroke(0);
  strokeWeight(1);
  // noLoop();
  push();
  var sign = new Signature(borderColor, borderSize, dateString, sketchName);
  sign.show();
  pop();
}
function draw() {
  translate(width * 0.5, height * 0.5);
  noStroke()
  randomDot(ngonRadius, ngon)
}
function randomDot(radius, npoints) {
  var r = random(radius);
  var theta = random(TWO_PI);
  spot.x = r * cos(theta);
  spot.y = r * sin(theta);
  colorDot(spot.x, spot.y, radius, npoints);
  fill(clo.r, clo.g, clo.b);
  ellipse(spot.x, spot.y, 2, 2);
}
// function randomDot(radius, npoints) {
//   var r = random(radius);
//   var theta = random(TWO_PI);
//   spot.x = r * cos(theta);
//   spot.y = r * sin(theta);
//   colorDot(spot.x, spot.y, radius, npoints);
//   fill(clo.r, clo.g, clo.b);
//   ellipse(spot.x, spot.y, 5, 5);
//}
function colorDot(dotx, doty, radius, npoints) {
  clo.r = random(0, 10);
  clo.g = random(100, 255);
  clo.b = random(100, 255);

  var angle = TWO_PI / npoints;
  var v1x = cos(0) * radius;
  var v1y = sin(0) * radius;

  for (var a = angle; a < TWO_PI + angle; a += angle) {
    var v2x = cos(a) * radius;
    var v2y = sin(a) * radius;

    var vec1 = createVector(v2x - v1x, v2y - v1y, 0);
    var vec2 = createVector(dotx - v1x, doty - v1y, 0);
    var crossProduct = p5.Vector.cross(vec1, vec2);
    var vec3 = createVector(1, 1, 1);
    var sign = p5.Vector.dot(crossProduct, vec3);
    //print(sign);
    if (sign < 0) {
      clo.r = 0;
      clo.g = 0;
      clo.b = 0;
    };
    v1x = v2x;
    v1y = v2y;
  };

}

