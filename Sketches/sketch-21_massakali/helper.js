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
var count = 10;
// Hexagone
function hexagon(posX, posY, radius) {
    // background(PALLATE[randCol]);
    // const rotAngle = TWO_PI / 6
    // const rotAngle = 360
    beginShape();
    for (let i = 0; i < 360; i++) {
        var x = random(PALLATE);
        const rotAngle = floor(random(360))
        // const rotAngle = TWO_PI / 6 ;
        // const rotAngle = floor(random(360))
        const outerVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
        const innerVertex = pointOnCircle(posX, posY, floor(random(radius - 20, radius / 3)), i * rotAngle);
        stroke(x);
        line(outerVertex.x, outerVertex.y, innerVertex.x, innerVertex.y)
        // point(outerVertex.x, outerVertex.y);
        // point(innerVertex.x, innerVertex.y);
        push()
        fill(x)
        ellipse(innerVertex.x, innerVertex.y, 2, 2);
        pop()
    }
    endShape()
}
//Helper Point on Circle
function pointOnCircle(posX, posY, radius, angle) {
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
}
function keyReleased() {
    //Only year-month-date
    var day = new Date().toISOString().split('T')[0];
    //Only year-month-date-time
    var timestamp = new Date().toISOString();
    if (key == 's' || key == 'S') saveCanvas(timestamp, 'png');
    if (keyCode == DELETE || keyCode == BACKSPACE) clear();
}