import { cellState } from "./tester";
import { Cell } from "./tester";
import { Game } from "./tester";
import { ALIVE } from "./tester";
import { DEAD } from "./tester";




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
        const stateWith0Neighbours = cell.getNextState(0);
        expect(stateWith0Neighbours).toEqual(cellState.DEAD); //expecting to be initialized to DEAD

        const stateWith1Neighbour = cell.getNextState(1);
        expect(stateWith1Neighbour).toEqual(cellState.DEAD);
    });

    // Second condition of the cell (Any live cell with fewer more than three live neighbours dies as if by overcrowding.)
    it('Should die if it has more than 3 live neighbours', () => {
        const cell = new Cell(cellState.ALIVE); //initially alive
        const stateWith4Neighbours = cell.getNextState(4);
        expect(stateWith4Neighbours).toEqual(cellState.DEAD); //expecting to be initialized to DEAD

        const stateWith5Neighbours = cell.getNextState(5);
        expect(stateWith5Neighbours).toEqual(cellState.DEAD);
    });
    // Third condition of the cell (Any live cell with two or three live neighbours lives on to the next generation.
    it('Should live with 2 or 3 live neighbours', () => {
        const cell = new Cell(cellState.ALIVE);
        const stateWith2Neighbours = cell.getNextState(2);
        expect(stateWith2Neighbours).toEqual(cellState.ALIVE);

        const stateWith3Neighbours = cell.getNextState(3);
        expect(stateWith3Neighbours).toEqual(cellState.ALIVE); //expecting to be initialized to AlIVE

    });
    // Fourth condition of the cell (Any dead cell with exactly three live neighbours becomes a live cell.)
    it('Should be alive with exactly 3 live neighbours', () => {
        const cell = new Cell(cellState.DEAD);
        const stateWith3Neighbours = cell.getNextState(3);
        expect(stateWith3Neighbours).toEqual(cellState.ALIVE);
    });
});

describe('Game of Life', () => {
    it('should be intialized with initial states', () => {
        // creating array of intial states
        const state1 = [
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, ALIVE]
        ];

        const game1 = new Game(state1);

        //creating cells with above initial states
        const cellState1 = [
            [new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE)],
            [new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE)],
            [new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE)],
        ];
        expect(game1.state).toEqual(cellState1);

        const state2 = [
            [DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD]
        ];
        const game2 = new Game(state2);

        //creating cells with above initial states
        const cellState2 = [
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
        ];
        expect(game2.state).toEqual(cellState2);
    })



})
