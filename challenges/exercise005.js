export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const nIndex = nums.findIndex((num) => n === num);
  if (nIndex === nums.length - 1 || nIndex === -1) {
    return null;
  }
  return nums[nIndex + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  const frequencies = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    frequencies[char] === undefined
      ? (frequencies[char] = 1)
      : frequencies[char]++;

    if (!frequencies["0"]) {
      frequencies["0"] = 0;
    }
    if (!frequencies["1"]) {
      frequencies["1"] = 0;
    }
  }
  return frequencies;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  if (n.toString().length <= 1) return n;
  const reversedNumber = Array.from(n.toString()).reverse().join("");
  return Number(reversedNumber);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  const flatArray = arrs.flat();
  return flatArray.reduce((total, num) => (total += num));
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length > 3) {
    const middleSection = arr.slice(1, arr.length - 1);
    const firstItem = arr[0];
    const lastItem = arr[arr.length - 1];

    return [lastItem, ...middleSection, firstItem];
  }

  return arr.reverse();
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  const valueMatch = Object.values(haystack).some((val) =>
    val.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );
  return valueMatch;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  const wordsArray = str.split(" ");
  const frequencies = {};

  for (let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i].toLowerCase();
    word = word.replace(/[^a-zA-Z0-9 ]/, "");

    frequencies[word] === undefined
      ? (frequencies[word] = 1)
      : frequencies[word]++;
  }
  return frequencies;
};
