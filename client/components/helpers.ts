export function isArrayNotEmpty(arr: any[]) {
  if (Array.isArray(arr)) {
    return !!arr.length;
  }
  return false;
}

export function capsCamelFirstWord(word: string) {
  let newWord = word;
  return newWord.replace(/^([a-z])([a-z]+)([A-Z][a-z]+)/g, (_, f, s) => f.toUpperCase() + s);
}

export function setCamelToArray(word: string) {
  let newWord = word;
  return newWord.match(/[a-zA-Z][a-z]+/g).map(capitalizeWord);
}

export function capitalizeWord(word: string) {
  let newWord = word;
  return newWord.charAt(0).toUpperCase() + newWord.substring(1);
}
