let canvas;
let canvasContext;

let move;

let fps = 250;

let pointColor = "green";
let backgroundColor = "black";
let pointRadius = 1;

let x = 0;
let y = 0;

window.onload = function () {
  canvas = document.getElementById("canvas");
  canvasContext = canvas.getContext('2d');

  canvasContext.fillStyle = backgroundColor;
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  move = setInterval(doIt, 1000 / fps);
};

let doIt = function () {
  for (let i = 0; i < 20; i++)
    moveAll()
};

function moveAll() {

  let nextX, nextY;
  let r = Math.random();
  if (r < 0.01) {
    nextX = 0;
    nextY = 0.16 * y;
  } else if (r < 0.86) {
    nextX = 0.85 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  } else if (r < 0.93) {
    nextX = 0.20 * x - 0.26 * y;
    nextY = 0.23 * x + 0.22 * y + 1.6;
  } else {
    nextX = -0.15 * x + 0.28 * y;
    nextY = 0.26 * x + 0.24 * y + 0.44;
  }

  // Scaling and positioning
  let plotX = canvas.width * (x + 3) / 6;
  let plotY = canvas.height - canvas.height * ((y + 2) / 14);

  drawFilledCircle(plotX, plotY, pointRadius, pointColor);

  x = nextX;
  y = nextY;

}
const drawFilledCircle = (centerX, centerY, radius, color) => {
  canvasContext.beginPath();
  canvasContext.fillStyle = color;
  canvasContext.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
  canvasContext.fill();
};
