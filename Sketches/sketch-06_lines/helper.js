// Shape
function shape(posX, posY, radius, numOfSides) {
    const rotAngle = TWO_PI / numOfSides
    beginShape();
    for (let i = 0; i < numOfSides; i++) {
        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
        vertex(thisVertex.x, thisVertex.y)
        shapePosArray.push(thisVertex);
    }
    endShape(CLOSE)
}

// Triangle
function shape(posX, posY, radius, numOfSides) {
    const rotAngle = TWO_PI / numOfSides
    beginShape();
    for (let i = 0; i < numOfSides; i++) {
        console.log(i);

        const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
        vertex(thisVertex.x, thisVertex.y)
        shapePosArray.push(thisVertex);
    }
    endShape(CLOSE)
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