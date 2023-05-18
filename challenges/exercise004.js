export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const newArr = [];
  nums.forEach((num) => {
    num < 1 && newArr.push(num);
  });
  return newArr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const newArr = [];
  names.forEach((name) => {
    name.charAt(0) === char && newArr.push(name);
  });
  return newArr;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const newArr = [];
  words.forEach((word) => {
    word.startsWith("to ") && newArr.push(word);
  });
  return newArr;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const newArr = [];
  nums.forEach((num) => {
    Number.isInteger(num) && newArr.push(num);
  });

  return newArr;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // NOTE:
  // When I use the spread operator, I can't declare the array as a const,
  // but can declare it as a const when I use push() - see above ^^

  let newArr = [];
  users.forEach((user) => {
    newArr = [...newArr, user?.data.city.displayName];
  });
  return newArr;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  let newArr = [];
  nums.forEach((num) => {
    let sqrt = Math.sqrt(num);
    sqrt = Math.round(sqrt * 100) / 100;
    newArr = [...newArr, sqrt];
  });

  return newArr;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let newArr = [];
  sentences.forEach((sentence) => {
    sentence.toLowerCase().includes(str.toLowerCase()) && newArr.push(sentence);
  });
  return newArr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let newArr = [];
  triangles.forEach((triangle) => {
    newArr.push(Math.max(...triangle));
  });
  return newArr;
}
