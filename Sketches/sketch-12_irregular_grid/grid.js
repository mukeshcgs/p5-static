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

    //GRID
    for (let i = 0; i < windowHeight; i++) {
        for (let j = 0; j < grid.cols; j++) {
            const x = i * cell.width
            const y = j * cell.height
            stroke(0, 255, 0)
            beginShape(POINTS);
            vertex(x, y)
            endShape();
            // var cX = x;
            // var nX = x * cell.width;
            // ellipse(cX, nX, 20, 20)
            // if (random(0, 1) > 0.5) {
            //     line(x, y, x + cell.width, y + cell.height)
            // } else {
            //     line(x + cell.width, y, x, y + cell.height)
            // }
        }
    }

}