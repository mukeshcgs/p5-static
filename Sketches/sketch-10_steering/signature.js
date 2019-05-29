class Signature {
    constructor(x, y) {
        // this.pos = createVector(random(width), random(height));
    }
    show() {
        var s = '28 May 2019';
        var dateW = textWidth(s);
        stroke(255);
        strokeWeight(0);
        textSize(18);
        fill(155, 142, 124);
        // textLeading(20); // Set leading to 10

        push();
        textFont(font);
        textAlign(RIGHT, CENTER);
        text(s, width * 0.94, height * 0.97);
        pop();

        
        push();
        strokeWeight(4);
        strokeCap(SQUARE);
        strokeJoin(MITER);
        stroke(155, 142, 124);
        noFill();
        translate(width * 0.02, height * 0.02);
        beginShape();
        vertex(width * 0.98 - (dateW * 2), height * 0.96);
        vertex(0, height * 0.96);
        vertex(0, 0);
        vertex(width * 0.96, 0);
        vertex(width * 0.96, height * 0.96);
        endShape(OPEN);
        pop();
    }
}