import { checkState } from "./tester"


describe("state", () => {
    it("should be alive", () => {
        const result = checkState("0")
        expect(result).toBe("alive");
    })
})