import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
} from "../challenges/exercise007";

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

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
describe("getScreentimeAlertList", () => {
  const users = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        {
          date: "2019-05-01",
          usage: { twitter: 44, instagram: 22, facebook: 40 },
        },
        {
          date: "2019-05-02",
          usage: { twitter: 56, instagram: 40, facebook: 31 },
        },
        {
          date: "2019-05-03",
          usage: { twitter: 12, instagram: 15, facebook: 19 },
        },
        {
          date: "2019-05-04",
          usage: { twitter: 10, instagram: 56, facebook: 61 },
        },
      ],
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        {
          date: "2019-06-11",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
        },
        {
          date: "2019-06-13",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
        },
        {
          date: "2019-06-14",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
        },
        {
          date: "2019-05-04",
          usage: { twitter: 10, instagram: 56, facebook: 69 },
        },
      ],
    },
  ];
  test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
    expect(getScreentimeAlertList(users, "2019-05-01")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual([
      "beth_1234",
      "sam_j_1989",
    ]);
  });
});

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */

// describe("hexToRGB", () => {
//   test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
//     expect(hexToRGB(users, "2019-05-01")).toEqual(["beth_1234"]);
//     expect(hexToRGB(users, "2019-05-04")).toEqual(["beth_1234", "sam_j_1989"]);
//   });
// });
