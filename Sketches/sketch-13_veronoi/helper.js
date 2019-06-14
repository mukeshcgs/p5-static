var font, fontS;
function preload() {
    // font = loadFont('../fonts/Krutidev_040_bo ld.TTF')
    fontS = loadFont('../fonts/DV_ME_Shree0709.TTF');
    // font = loadFont('../fonts/Arvo/Arvo-Regular.TTF');
    // font = loadFont('../fonts/Arvo/Arvo-Bold.TTF');
    // font = loadFont('../fonts/Domine/Domine-Regular.TTF');
    // font = loadFont('../fonts/Domine/Domine-Bold.TTF');
    font = loadFont('../fonts/Prata/Prata-Regular.TTF');
    // font = loadFont('../fonts/Questrial/Questrial-Regular.TTF');
    // font = loadFont('../fonts/Vidaloka/Vidaloka-Regular.TTF');
}
// Hexagone
function hexagon(posX, posY, radius) {
    const rotAngle = TWO_PI / 6
    beginShape();
    for (let i = 0; i < 6; i++) {
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
        vertex(thisVertex.x, thisVertex.y)
    }
    endShape(CLOSE)
}

//Helper Point on Circle
function pointOnCircle(posX, posY, radius, angle) {
    const x = posX + radius * cos(angle)
    const y = posY + radius * sin(angle)
    return createVector(x, y)
}