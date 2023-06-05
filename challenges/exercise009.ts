// 👉 	EXERCISE 9 - ADD TYPESCRIPT

type Word = string;

export function capitalize(word: Word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1);
}

export function generateInitials(firstName: string, lastName: string): string {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return `${firstName.slice(0, 1)}.${lastName.slice(0, 1)}`;
}

export function addVAT(originalPrice: number, vatRate: number): number {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let VAT = (vatRate / 100) * originalPrice;
  return Math.round((originalPrice + VAT) * 100) / 100;
}

export function getSalePrice(originalPrice: number, reduction: number): number {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let discount = (reduction / 100) * originalPrice;
  // return parseFloat((originalPrice - discount).toFixed(2)); // tried parseFloat this time
  return Math.round((originalPrice - discount) * 100) / 100;
}

export function getMiddleCharacter(str: string): string {
  if (str === undefined) throw new Error("str is required");
  let start = str.length % 2 === 0 ? str.length / 2 - 1 : (str.length - 1) / 2;

  let lengthOfString = str.length % 2 === 0 ? 2 : 1;
  return str.slice(start, start + lengthOfString);
}

export function reverseWord(word: Word): Word {
  if (word === undefined) throw new Error("word is required");
  return Array.from(word).reverse().join("");
}

export function reverseAllWords(words: Word[]): Word[] {
  if (words === undefined) throw new Error("words is required");
  return words.map((word) => reverseWord(word));
}

type User = {
  name: string;
  OS: string;
  type: string;
};

export function countLinuxUsers(users: User[]): number {
  if (users === undefined) throw new Error("users is required");
  return users.filter((user) => user.type === "Linux").length;
}
