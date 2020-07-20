
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
}




export { Cell };
export { cellState };
export { Game };
