export function isArrayNotEmpty(arr: any[]) {
  if (Array.isArray(arr)) {
    return !!arr.length;
  }
  return false;
}

export function capsCamelFirstWord(word: string) {
  return word.replace(/^([a-z])([a-z]+)([A-Z][a-z]+)/g, (_, f, s) => f.toUpperCase() + s);
}

export function setCamelToArray(word: string) {
  return word.match(/[a-zA-Z][a-z]+/g).map(capitalizeWord);
}

export function capitalizeWord(word: string) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}
