class Signature {
    constructor(Signature, borderSize, dateString, sketchName) {
        // this.pos = createVector(random(width), random(height));
        this.borderColor = Signature
    }
    show() {
        var dateW = textWidth(dateString);
        stroke(this.borderColor);
        strokeWeight(0);
        textSize(18);
        fill(155, 142, 124);
        // textLeading(20); // Set leading to 10

        //Date position
        push();
        textFont(font);
        textAlign(RIGHT, CENTER);
        text(dateString, width * 0.96, height * 0.97);
        pop();

        //Poster name/number
        let posterNameSize = 36;
        push();
        textFont(font);
        textSize(posterNameSize);
        text(sketchName, width * 0.05, height * 0.05 + posterNameSize);
        pop();

        push();
        strokeWeight(borderSize);
        strokeCap(SQUARE);
        strokeJoin(MITER);
        stroke(this.borderColor);
        noFill();
        translate(width * 0.02, height * 0.02);
        beginShape();
        vertex(width * 0.96 - (dateW * 2), height * 0.96);
        vertex(0, height * 0.96);
        vertex(0, 0);
        vertex(width * 0.96, 0);
        vertex(width * 0.96, height * 0.96);
        endShape(OPEN);
        pop();
    }
}