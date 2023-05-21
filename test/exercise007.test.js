import { sumDigits } from "../challenges/exercise007";

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
