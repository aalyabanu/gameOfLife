
var cellState = { ALIVE: 1, DEAD: 0, };
class Cell {
    constructor(state) {
        this.state = state;
    }

    getNextState(numOfNeighbours) {
        if (numOfNeighbours < 2) {
            return cellState.DEAD;
        }
    }
}
export { Cell };

export { cellState };
