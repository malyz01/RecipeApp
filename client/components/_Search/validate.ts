import { IComplexSearch } from '../../interfaces';

export default (q: IComplexSearch) => {
  const { nutrients, ...rest } = q;
  const nutrientList = Object.keys(nutrients);
  let data = { ...rest };

  if (data.query === '') {
    throw new Error('Please enter Recipe name');
  }

  if (data.includeIngredients.length && Array.isArray(data.includeIngredients)) {
    data.includeIngredients = data.includeIngredients.join(',');
  }

  if (data.excludeIngredients.length && Array.isArray(data.excludeIngredients)) {
    data.excludeIngredients = data.excludeIngredients.join(',');
  }

  if (nutrientList.length) {
    for (const n of nutrientList) {
      data = { ...data, ...getMinMax(nutrients[n]) };
    }
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
