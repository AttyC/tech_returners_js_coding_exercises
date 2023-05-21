import { sumMultiples, isValidDNA } from "../challenges/exercise006";

// should return the sum of any numbers which are a multiple of 3 or 5
describe("sumMultiples", () => {
  test("returns sum of any numbers which are muliples of 3 or 5", () => {
    expect(sumMultiples([9, 24, 11, 25, 16])).toBe(58);
  });
  test("returns the number if the number is divisible by neither 3 nor 5", () => {
    expect(sumMultiples([1, 11, 34])).toEqual([]);
  });
});

describe("isValidDNA", () => {
  test("returns true if string contain characters C, G, T or A only", () => {
    expect(isValidDNA("C")).toBe(true);
    expect(isValidDNA("F")).toBe(false);
    expect(isValidDNA("CF")).toBe(false);
    expect(isValidDNA("TG")).toBe(true);
    expect(isValidDNA("AA")).toBe(true);
    expect(isValidDNA("HHTG")).toBe(false);
    expect(isValidDNA("012345")).toBe(false);
  });
});
