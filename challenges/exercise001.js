// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  if (/[ A-Z]/.test(word.substring(0, 1))) return word;
  return word.replace(word.substring(0, 1), word.substring(0, 1).toUpperCase());
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return `${firstName.slice(0, 1)}.${lastName.slice(0, 1)}`;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let VAT = (vatRate / 100) * originalPrice;
  return Math.round((originalPrice + VAT) * 100) / 100;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let discount = (reduction / 100) * originalPrice;
  // return parseFloat((originalPrice - discount).toFixed(2)); // tried parseFloat this time
  return Math.round((originalPrice - discount) * 100) / 100;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let start;

  if (str.length % 2 === 0) {
    start = str.length / 2 - 1;
    return str.slice(start, start + 2);
  }
  start = (str.length - 1) / 2;
  return str.slice(start, start + 1);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return Array.from(word).reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map((word) => reverseWord(word));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter((user) => user.type === "Linux").length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  const findTotal = (runningTotal, score) => runningTotal + score;
  return parseFloat((scores.reduce(findTotal) / scores.length).toFixed(2));
}

export function simpleFizzBuzz(number) {
  if (number === undefined) throw new Error("number is required");
  if (number % 3 === 0 && number % 5 === 0) return "fizzbuzz";
  if (number % 3 === 0) return "fizz";
  if (number % 5 === 0) return "buzz";
  return number;
}
