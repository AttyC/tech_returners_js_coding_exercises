export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((n) => n * n);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const newArr = words.map((word, index) => {
    return index === 0
      ? word.toLowerCase()
      : word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
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

  return menu.some((m) => m.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let filtered = [];

  arr1.map((num) => arr2.includes(num) && filtered.push(num));

  return [...new Set(filtered)].sort();
}
