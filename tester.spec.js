import { checkState } from "./tester"


describe("state", () => {
    it("should be alive", () => {
        const result = checkState("0")
        expect(result).toBe(true);
    })
    it("should be adead", () => {
        const result = checkState("1")
        expect(result).toBe(false);
    })
})
