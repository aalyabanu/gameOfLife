import { cellState } from "./tester";
import { Cell } from "./tester";

describe("cell state", () => {
    it("should be ALIVE", () => {
        const result = cellState.ALIVE
        expect(result).toEqual(1);
    })
    it("should be DEAD", () => {
        const result = cellState.DEAD
        expect(result).toEqual(0);
    })
})

//assigning a cell with initial state
describe("Cell ", () => {
    it("should be assigned with cellState", () => {
        const alivecell = new Cell(cellState.ALIVE) //creating new instance of Cell object and assigning it with alive state
        expect(alivecell.state).toEqual(cellState.ALIVE);
        const deadcell = new Cell(cellState.DEAD)
        expect(deadcell.state).toEqual(cellState.DEAD);

    });

    // Frist condition of the cell (Any live cell with fewer than two live neighbours dies as if by under population.)
    it('Should die if it has fewer than 2 live nieghbors', () => {
         const cell = new Cell(cellState.ALIVE);
        const StateWith0Neighbors = cell.getNextState(0);
        expect(StateWith0Neighbors).toEqual(cellState.DEAD); //expecting to be initialized to DEAD

        const StateWith1Neighbor = cell.getNextState(1);
        expect(StateWith1Neighbor).toEqual(cellState.DEAD);
    });

});
