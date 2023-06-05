// 👉 	EXERCISE 9 - ADD TYPESCRIPT

type Word = string;

export function capitalize(word: Word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1);
}
