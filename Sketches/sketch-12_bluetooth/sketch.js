// static-server
// http://localhost:9080/Sketches/sketch-12_bluetooth/

// http-server run this in root 
// http://127.0.0.1:8080/Sketches/sketch-10_steering/
// http://127.0.0.1:8080/Sketches/sketch-10_steering/
// http://10.132.180.61:8080/Sketches/sketch-10_steering/
// http://10.211.55.2:8080/Sketches/sketch-10_steering/
// http://10.37.129.2:8080/Sketches/sketch-10_steering/

//Bluetooth
const serviceUuid = "19b10010-e8f2-537e-4f6c-d104768a1214";
let myCharacteristic;
let myValue = 0;
let myBLE;

// layout
let borderColor = 0;
let borderSize = 4;
let dateString = "29 May 19";
let sketchName = "P-012";

//Global variables
const winW = window.innerWidth
const winH = window.innerHeight
var font, fontS;
var vehicles = [];
var t;
var t2 = 0;
var easing = 0.05;
var xPos = 0.0;
var yPos = 0.0;
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
  createCanvas(600, 600);
  // createCanvas(736, 1040);
  background(255);
  // background(193,215,128);
  stroke(0);
  strokeWeight(1);
  // noLoop();
  angleMode(DEGREES);
  t = 0;

  //Bluetooth
  // Create a p5ble class
  myBLE = new p5ble();

  textSize(20);
  textAlign(CENTER, CENTER);

  // Create a 'Connect' button
  const connectButton = createButton('Connect')
  connectButton.mousePressed(connectToBle);
}
function connectToBle() {
  // Connect to a device by passing the service UUID
  myBLE.connect(serviceUuid, gotCharacteristics);
}

// A function that will be called once got characteristics
function gotCharacteristics(error, characteristics) {
  if (error) console.log('error: ', error);
  console.log('characteristics: ', characteristics);
  myCharacteristic = characteristics[0];
  // Read the value of the first characteristic
  myBLE.read(myCharacteristic, gotValue);
}

// A function that will be called once got values
function gotValue(error, value) {
  if (error) console.log('error: ', error);
  console.log('value: ', value);
  myValue = value;
  // After getting a value, call p5ble.read() again to get the value again
  myBLE.read(myCharacteristic, gotValue);
}
function draw() {
  // background(220);
  background(255);
  text(myValue, 100, 100);
  // Example 01

  noFill();
  push();
  var sign = new Signature(borderColor, borderSize, dateString, sketchName);
  sign.show();
  pop();
  beginShape();
  for (let x = 0; x < winW; x++) {
    var nx = map(x, 0, width, 0, 2);
    var y = height * noise(nx);
    vertex(x, y)
  }
  endShape();

  // Example 02
  push();
  noStroke();
  var x = width * noise(t);
  var y = height * noise(t + 5);
  var r = 255 * noise(t + 10);
  var g = 255 * noise(t + 15);
  var b = 255 * noise(t + 20);

  fill(r, g, b);
  // ellipse(x, y, 120, 120);

  t = t + 0.01;
  pop();
  //Example 03
  // var x1 = width * noise(t2 + 15);
  // var x2 = width * noise(t2 + 25);
  // var x3 = width * noise(t2 + 35);
  // var x4 = width * noise(t2 + 45);
  // var y1 = height * noise(t2 + 55);
  // var y2 = height * noise(t2 + 65);
  // var y3 = height * noise(t2 + 75);
  // var y4 = height * noise(t2 + 85);

  // bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  // t2 += 0.005;

  // clear the background every 500 frames using mod (%) operator
  // if (frameCount % 100 == 0) {
  //   // background(255);
  // }
  var targetX = mouseX;
  var targetY = mouseY;

  xPos += (targetX - xPos) * easing;
  yPos += (targetY - yPos) * easing;
  ellipse(mouseX, mouseY, 20, 20)
  ellipse(xPos, yPos, 40, 40)
}

