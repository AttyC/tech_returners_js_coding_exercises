export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const nIndex = nums.findIndex((num) => n === num);
  if (nIndex === nums.length - 1 || nIndex === null) {
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
      : (frequencies[char] += 1);

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
  // Your code here!
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
