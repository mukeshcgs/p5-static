
function grids(gridSize) {
    let cellSize = gridSize
    const grid = {
        rows: winH / cellSize,
        cols: winW / cellSize
    }
    const cell = {
        width: cellSize,
        height: cellSize
    }

    console.log("Grid");
    //GRID
    for (let i = 0; i < windowHeight; i++) {
        for (let j = 0; j < grid.cols; j++) {
            const x = i * cell.width
            const y = j * cell.height
            stroke(255);
            push()
            beginShape(TRIANGLE_STRIP);
            vertex(x, y)
            // ellipse(x, y, j*1.2, j*1.2)
            // if (random(0, 1) > 0.5) {
            //     push()
            //     strokeWeight(random(3))
            //         line(x, y, x + cell.width, y + cell.height)
            //     line(x + cell.width, y, x, y + cell.height)
            //     pop()
            // } else {
            //     push()
            //     strokeWeight(random(3))
            //         line(x, y, x + cell.width, y + cell.height)
            //     line(x + cell.width, y, x, y + cell.height)
            //     pop()
            // }
            endShape();
            pop()
        }
    }

}