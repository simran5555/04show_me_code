import { sum } from "../sum";

test('calculate sum of two numbers', () => {
     const result = sum(3,9)

     //assertion
     expect(result).toBe(12)
})