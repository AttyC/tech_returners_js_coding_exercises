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
