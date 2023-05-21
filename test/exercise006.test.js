import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
} from "../challenges/exercise006";

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

describe("getComplementaryDNA", () => {
  test("returns a string of the complementary base pairs", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("AAGG")).toBe("TTCC");
  });
});

describe("isItPrime", () => {
  test("returns true if number is prime A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(10)).toBe(false);
    expect(isItPrime(39)).toBe(false);
    expect(isItPrime(41)).toBe(true);
    expect(isItPrime(516)).toBe(false);
    expect(isItPrime(721)).toBe(false);
  });
});

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ] */

describe("createMatrix", () => {
  test("returns an array of n arrays, each filled with n items", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
    expect(createMatrix(2, "butter")).toEqual([
      ["butter", "butter"],
      ["butter", "butter"],
    ]);
    expect(createMatrix(0, "fluffy")).toEqual([]);
  });
});
