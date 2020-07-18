import { cellState } from "./tester"

describe("cell state", () => {
    it("should be ALIVE", () => {
        const result = cellState.ALIVE
        expect(result).toEqual(1);
    })
    it("should be dead", () => {
        const result = cellState.DEAD
        expect(result).toEqual(0);
    })
})

//assigning a cell with initial state
describe('Cell', () => {
    it("should be assigned with cellState", () => {
        const cell = new Cell(cellState.ALIVE) //creating new instance of Cell object and assigning it with alive state
        expect(cell.state).toEqual(cellState.AlIVE); //expecting to be initialized to ALIVE
    });
});
