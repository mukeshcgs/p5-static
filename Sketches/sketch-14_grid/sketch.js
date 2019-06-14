// static-server
// http-server run this in root 
// http://127.0.0.1:8080/Sketches/sketch-10_steering/
// http://127.0.0.1:8080/Sketches/sketch-10_steering/
// http://10.132.180.61:8080/Sketches/sketch-10_steering/
// http://10.211.55.2:8080/Sketches/sketch-10_steering/
// http://10.37.129.2:8080/Sketches/sketch-10_steering/

// layout
const winW = window.innerWidth
const winH = window.innerHeight
var font, fontS;
var vehicles = [];

function preload() {
  // font = loadFont('fonts/Krutidev_040_bo ld.TTF')
  fontS = loadFont('../fonts/DV_ME_Shree0709.TTF');
  // font = loadFont('fonts/Arvo/Arvo-Regular.TTF');
  // font = loadFont('fonts/Arvo/Arvo-Bold.TTF');
  // font = loadFont('fonts/Domine/Domine-Regular.TTF');
  // font = loadFont('fonts/Domine/Domine-Bold.TTF');
  font = loadFont('../fonts/Prata/Prata-Regular.TTF');
  // font = loadFont('fonts/Questrial/Questrial-Regular.TTF');
  // font = loadFont('fonts/Vidaloka/Vidaloka-Regular.TTF');
}
function setup() {
  createCanvas(600, 600);
  background(255, 245, 232);
  stroke(155, 142, 124);
  strokeWeight(1);
}

function draw() {
  background(0);
  // background(255, 245, 232);

  //Grid
  grids(100)
  var sign = new Signature(10, 100);
  sign.show();

}