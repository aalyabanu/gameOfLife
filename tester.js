
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
}

export { Cell };
export { cellState };
