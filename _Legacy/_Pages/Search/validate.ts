import { IComplexSearch } from '../../../interfaces';

export default (q: IComplexSearch) => {
  const { nutrients, includeIngredients, excludeIngredients, ...rest } = q;
  const nutrientList = Object.keys(nutrients);
  let data: IComplexSearch = { ...rest };

  // if (data.query === '') {
  //   throw new Error('Please enter Recipe name');
  // }

  if (includeIngredients.length && Array.isArray(includeIngredients)) {
    data.includeIngredients = includeIngredients.join(',');
  }

  if (excludeIngredients.length && Array.isArray(excludeIngredients)) {
    data.excludeIngredients = excludeIngredients.join(',');
  }

  if (nutrientList.length) {
    for (const n of nutrientList) {
      data = { ...data, ...getMinMax({ [n]: nutrients[n] }) };
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
