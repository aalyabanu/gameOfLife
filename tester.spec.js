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
        const aliveCell = new Cell(cellState.ALIVE) //creating new instance of Cell object and assigning it with alive state
        expect(aliveCell.state).toEqual(cellState.ALIVE);
        const deadCell = new Cell(cellState.DEAD)
        expect(deadCell.state).toEqual(cellState.DEAD);

    });

    // First condition of the cell (Any live cell with fewer than two live neighbours dies as if by under population.)
    it('Should die if it has fewer than 2 live neighbours', () => {
        const cell = new Cell(cellState.ALIVE); //initially alive
        const StateWith0Neighbours = cell.getNextState(0);
        expect(StateWith0Neighbours).toEqual(cellState.DEAD); //expecting to be initialized to DEAD

        const StateWith1Neighbour = cell.getNextState(1);
        expect(StateWith1Neighbour).toEqual(cellState.DEAD);
    });

    // Second condition of the cell (Any live cell with fewer more than three live neighbours dies as if by overcrowding.)
    it('Should die if it has more than 3 live neighbours', () => {
        const cell = new Cell(cellState.ALIVE); //initially alive
        const StateWith4Neighbours = cell.getNextState(4);
        expect(StateWith4Neighbours).toEqual(cellState.DEAD); //expecting to be initialized to DEAD

        const StateWith5Neighbours = cell.getNextState(5);
        expect(StateWith5Neighbours).toEqual(cellState.DEAD);
    });
    // Third condition of the cell (Any live cell with two or three live neighbours lives on to the next generation.
    it('Should live with 2 or 3 live neighbours', () => {
        const cell = new Cell(cellState.ALIVE);
        const StateWith2Neighbours = cell.getNextState(2);
        expect(StateWith2Neighbours).toEqual(cellState.ALIVE);

        const StateWith3Neighbours = cell.getNextState(3);
        expect(StateWith3Neighbours).toEqual(cellState.ALIVE); //expecting to be initialized to AlIVE

    });
});
