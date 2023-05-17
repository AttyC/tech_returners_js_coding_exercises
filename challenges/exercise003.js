export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let squaredNums = [];
  nums.map((num) => (squaredNums = [...squaredNums, num * num]));
  return squaredNums;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const newArr = words.map((word, index) => {
    if (index === 0) return word;
    if (index !== 0)
      return word.substring(0, 1).toUpperCase() + word.substring(1);
  });
  return newArr.join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  const findTotal = (runningTotal, number) => runningTotal + number;

  const subjectLengths = Object.values(people).map(
    (person) => person.subjects.length
  );
  return subjectLengths.reduce(findTotal);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}
