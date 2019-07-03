// static-server  run this in root 

// layout
const winW = window.innerWidth
const winH = window.innerHeight
var font, fontS;



// function randomlySubdivideGridPoints() {
//   for (var i = 0; i < points.lenght; i++) {
//     if (random(1) > 0.5) {
//       p.subdivide(newPoints);
//     } else {
//       newPoints.push(p);
//     }
//   }
//   points = newPoints;
// }

function setup() {
  createCanvas(600, 600);
  background(0);
  stroke(255);
  strokeWeight(1);
  noLoop();

  /////////////////////////
  var tileWidth = 100;
  var tileHeight = 100;
  var points = [];

  for (let i = 0; i <= 400; i += tileWidth) {
    for (let j = 0; j <= 400; j+= tileHeight) {
      points.push(new GridPoint(i, j, tileWidth, tileHeight));
      ellipse(i, j, 5, 5)
      push()
      stroke(255)
      noFill()
      translate(tileWidth/2, tileHeight/2)
      rect(i, j, tileWidth, tileHeight)
      pop()
    }
  }
  console.log(points);
}

function draw() {

  // background(255, 245, 232);
  var p = new GridPoint();
  p.plot()
  //Grid
  // grids(100)
  // var sign = new Signature(10, 100);
  // sign.show();

}