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
var SIZE = 500;
//Random Color select
// const PALLATE = ["#1be7ff", "#f8333c", "#8f2d56", "#6eeb83", "#e4ff1a"];
// const PALLATE = ["#333232", "#4c5454", "#f3a712", "#db2b39", "#447604"];
// const PALLATE = ["#30bced", "#d16014", "#e3e4db", "#23395b", "#050401"];
// const PALLATE = ["#26547c", "#ef476f", "#ffd166", "#23af82", "#fcfcfc"];
// const PALLATE = ["#a0006b", "#ffb533", "#f95c41", "#9ec630", "#ff959b"];
const PALLATE = ["#28008a", "#ffffff", "#d20027"];
//ORANGE SHADES
// const PALLATE = ["#900c3f", "#c70039", "#ffd166", "#ff5733", "#ffc300"];

function setup() {
  createCanvas(600, 600);
  // background(255, 245, 232);
  // stroke(155, 142, 124);
  // strokeWeight(1);
  noLoop()
}

function draw() {
  background(0);
  // background(255);
  // background(255, 245, 232);
  push()
  //Grid
  // grids(100)
  // var sign = new Signature(10, 100);
  // sign.show();
  pop()

  push()
  translate(width / 2, height / 2);
  noFill()
  // ellipse(0, 0, SIZE, SIZE);
  hexagon(0, 0, 200)
  pop()
}
