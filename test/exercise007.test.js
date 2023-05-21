import { sumDigits, createRange } from "../challenges/exercise007";

// This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
describe("sumDigits", () => {
  test("returns sum of any numbers which are muliples of 3 or 5", () => {
    expect(sumDigits(123)).toBe(6);
  });
  test("returns the number if the number is divisible by neither 3 nor 5", () => {
    expect(sumDigits(1)).toEqual(1);
  });
  test("returns the number if the number is divisible by neither 3 nor 5", () => {
    expect(sumDigits(4067)).toEqual(17);
  });
});

describe("createRange", () => {
  test("creates a range of numbers as an array using a start, an end and a step.", () => {
    expect(createRange(1, 5, 1)).toEqual([1, 2, 3, 4, 5]);
    expect(createRange(10, 20, 2)).toEqual([10, 12, 14, 16, 18, 20]);
  });
  test("returns the number if no step is included", () => {
    expect(createRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(createRange(1, 0)).toEqual([]);
  });
});
