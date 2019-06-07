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
  fontS = loadFont('fonts/DV_ME_Shree0709.TTF');
  // font = loadFont('fonts/Arvo/Arvo-Regular.TTF');
  // font = loadFont('fonts/Arvo/Arvo-Bold.TTF');
  // font = loadFont('fonts/Domine/Domine-Regular.TTF');
  // font = loadFont('fonts/Domine/Domine-Bold.TTF');
  font = loadFont('fonts/Prata/Prata-Regular.TTF');
  // font = loadFont('fonts/Questrial/Questrial-Regular.TTF');
  // font = loadFont('fonts/Vidaloka/Vidaloka-Regular.TTF');
}
function setup() {
  createCanvas(800, 800);
  background(255, 245, 232);
  stroke(155, 142, 124);
  strokeWeight(1);
  var points = [];
  push();
  textFont(fontS);
  textSize(150);
  textAlign(CENTER, CENTER);
  points = fontS.textToPoints('t e', 350, 350);
  pop();

  // for (var i = 0; i < 100; i++) {
  //   points.push(vertex(random(100, 400), random(100, 400)));
  // }
  // push()
  // beginShape(POINTS);
  // let RAD = 300;
  // for (var c = 0; c < 10; c++) {
  //   for (var a = 0; a < TWO_PI; a += 0.01) {
  //     var posX = RAD * cos(a);
  //     var posY = RAD * sin(a);
  //     vertex(posX, posY);
  //     let p = createVector(posX, posY);
  //     points.push(p);
  //   }
  //   RAD = RAD - RAD * 0.05;
  //   stroke(random(100, 255), 142, 124);
  // }
  // endShape();
  // pop()

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(0);
  // background(255, 245, 232);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.update();
    v.show();
    v.behaviors();
  }
  var sign = new Signature(10, 100);
  sign.show();
}