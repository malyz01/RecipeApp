export const isArrayNotEmpty = (arr) => {
  if (Array.isArray(arr)) {
    return !!arr.length;
  }
  return false;
};
