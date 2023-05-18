export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const newArr = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] < 1 && newArr.push(nums[i]);
  }
  return newArr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const newArr = [];
  for (let i = 0; i < names.length; i++) {
    names[i].charAt(0) === char && newArr.push(names[i]);
  }
  return newArr;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const newArr = [];
  for (let i = 0; i < words.length; i++) {
    words[i].startsWith("to ") && newArr.push(words[i]);
  }
  return newArr;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const newArr = [];
  for (let i = 0; i <= nums.length; i++) {
    Number.isInteger(nums[i]) && newArr.push(nums[i]);
  }
  return newArr;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // NOTE:
  // When I use the spread operator, I can't declare the array as a const,
  // but can declare it as a const when I use push() - see above ^^

  let newArr = [];
  for (let i = 0; i <= users.length; i++) {
    newArr = [...newArr, users[i]?.data.city.displayName];
  }
  return newArr;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let sqrt = Math.sqrt(nums[i]);
    sqrt = Math.round(sqrt * 100) / 100;
    newArr = [...newArr, sqrt];
  }
  return newArr;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let newArr = [];
  for (let i = 0; i < sentences.length; i++) {
    sentences[i].toLowerCase().includes(str.toLowerCase()) &&
      newArr.push(sentences[i]);
  }
  return newArr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let newArr = [];
  for (let i = 0; i < triangles.length; i++) {
    newArr.push(Math.max(...triangles[i]));
  }
  return newArr;
}
