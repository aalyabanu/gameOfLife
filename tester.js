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

    getCellState(row,col){
        return this.state[row][col];
    }
    getNumOfAliveNeighbours(row, col) {
        const stateValues = {
            [cellState.ALIVE]: 1,
            [cellState.DEAD]: 0,
        };

        let numNeighbours = 0;
        const startRow = row - 1 < 0 ? 0 : row - 1; // the row before the cell row or the first row
        //if(row - 1 < 0){return 0} else{return row-1 }
        const endRow = row + 1 >= this.numRows ? this.numRows - 1 : row + 1; // the row after the cell row or the last row
        const startCol = col - 1 < 0 ? 0 : col - 1; // the col before the cell col or the first col
        const endCol = col + 1 >= this.numCols ? this.numCols - 1 : col + 1; // the col after the cell col or the last col

        for (let i = startRow; i <= endRow; i++) { // loop through the cell neigbours including the current cell position
            for (let j = startCol; j <= endCol; j++) {
                if (!(i === row && j === col)) { // ignore the current cell
                    numNeighbours += stateValues[this.state[i][j].state]; // increment the numNeighbours variable ie total number of adjacent neighbours
                }
            }
        }
        return numNeighbours;
    }



}




export { Cell };
export { cellState };
export { Game };
