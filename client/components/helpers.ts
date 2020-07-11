export const isArrayNotEmpty = (arr) => {
  if (Array.isArray(arr)) {
    return !!arr.length;
  }
  return false;
};

export const capsFirstWordCC = (word) => {
  let newWord = word;
  return newWord.replace(/^([a-z])([a-z]+)([A-Z][a-z]+)/g, (_, f, s) => f.toUpperCase() + s);
};
