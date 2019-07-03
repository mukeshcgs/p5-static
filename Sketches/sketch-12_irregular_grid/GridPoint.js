class GridPoint {
    constructor(x, y, tileWidth, tileHeight) {
      // this.pos = createVector(random(width), random(height));
      this.xPos = x;
      this.yPos = y;
      this.tW = tileWidth;
      this.tH = tileHeight;
    }
    plot() {
      rect(this.xPos, this.yPos, this.tW, this.tH);
      ellipse(this.xPos, this.yPos, 100, this.tH)
      console.log(this.xPos);
    }
    subdivide(newPoints) {
      console.log(newPoints);
      return newPoints
    }
  }