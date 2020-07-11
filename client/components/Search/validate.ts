import { IComplexSearch } from '../../interfaces/spoonacular';

export default (q: IComplexSearch) => {
  let data = { ...q };

  if (data.query === '') {
    throw new Error('Please enter Recipe name');
  }

  if (Array.isArray(data.includeIngredients)) {
    data.includeIngredients = data.includeIngredients.join(',');
  }

  if (Array.isArray(data.excludeIngredients)) {
    data.excludeIngredients = data.excludeIngredients.join(',');
  }

  return data;
};

export function getMinMax(nutri: object) {
  let ntrn = {};
  const entries = Object.entries(nutri);
  for (const [key, value] of entries) {
    ntrn[`min${key}`] = value[0];
    ntrn[`max${key}`] = value[1];
  }
  return ntrn;
}
