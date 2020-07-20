
var cellState = { ALIVE: 1, DEAD: 0, };
class Cell {
    constructor(state) {
        this.state = state;
    }

    getNextState(numOfNeighbours) {

        if (this.state === cellState.ALIVE) { //when the initial state of the cell is ALIVE
            if (numOfNeighbours === 2 || numOfNeighbours === 3) {
                return cellState.ALIVE;
            }
        } else if (numOfNeighbours === 3) {
            return cellState.ALIVE;
        }
        return cellState.DEAD; //when the initial state of the cell is DEAD
    }

    // if (this.state === cellState.ALIVE) {   //when the initial state of the cell is ALIVE
    //     if (numOfNeighbours < 2) {
    //         return cellState.DEAD;
    //     } else if (numOfNeighbours > 3) {
    //         return cellState.DEAD;
    //     } else if (numOfNeighbours === 2 || numOfNeighbours === 3) {
    //         return cellState.ALIVE;
    //     }
    // } else {  //when the initial state of the cell is DEAD
    //     return (numOfNeighbours === 3 ? cellState.ALIVE : cellState.DEAD);
    // }

};

class Game {
    constructor(state) {
        this.rows = state.length;
        this.cols = state[0].length;
        this.state = state.map(row => row.map(cellState => new Cell(cellState)));
    }

    getNumOfAliveNeighbours(row, col) {
        const rowBefore = row - 1;
        const currentRow = row;
        const rowAfter = row + 1;

        const colBefore = col - 1;
        const currentCol = col;
        const colAfter = col + 1;
        let numAliveNeighbours = 0;

        if (rowBefore >= 0) {  //rowBefore exists
            for (const i = 0; i <= this.cols; i++) {
                this.state[rowBefore][i] === "ALIVE" ? numAliveNeighbours++ : numAliveNeighbours = numAliveNeighbours;
            }
        }
        if (rowAfter <= this.rows) { //rowAfter exists
            for (const i = 0; i <= this.cols; i++) {
                this.state[rowAfter][i] === "ALIVE" ? numAliveNeighbours++ : numAliveNeighbours = numAliveNeighbours;
            }
        }

        for (const i = 0; i <= this.cols; i++) { //checking for the current row
            if (i != currentRow && i != currentCol) {  //ignore the current cell
                this.state[row][i] === "ALIVE" ? numAliveNeighbours++ : numAliveNeighbours = numAliveNeighbours;
            }
        }
        return numAliveNeighbours;

    }
}




export { Cell };
export { cellState };
export { Game };
