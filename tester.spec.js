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
