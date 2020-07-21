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
        const stateValues = {
            [cellState.ALIVE]: 1,
            [cellState.DEAD]: 0,
        };
        // to check if this cell is a neighbours.
        const cellAbove = (rowNum, colNum) => (
            (colNum === col - 1 && rowNum === row - 1) ||
            (colNum === col && rowNum === row - 1) ||
            (colNum === col + 1 && rowNum === row - 1)
        );

        const cellBelow = (rowNum, colNum) => (
            (colNum === col - 1 && rowNum === row + 1) ||
            (colNum === col && rowNum === row + 1) ||
            (colNum === col + 1 && rowNum === row + 1)
        );

        const cellNext = (rowNum, colNum) => (
            (colNum === col - 1 && rowNum === row) ||
            (colNum === col + 1 && rowNum === row)
        );

        let numNeighbours = 0;

        this.state.forEach((cellRow, rowNum) => {
            cellRow.forEach((cell, colNum) => {
                if (cellAbove(rowNum, colNum) ||
                    cellNext(rowNum, colNum) ||
                    cellBelow(rowNum, colNum)) {
                    numNeighbours += stateValues[cell.state];
                }
            });
        });

        return numNeighbours;


    }

    getNextState() {

    }
}








export { Cell };
export { cellState };
export { Game };
