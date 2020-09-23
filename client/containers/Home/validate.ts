import { IComplexSearch } from '../../interfaces';

export default (q: IComplexSearch) => {
  const { includeIngredients, excludeIngredients, ...rest } = q;
  let data: IComplexSearch = { ...rest };

  if (includeIngredients.length && Array.isArray(includeIngredients)) {
    data.includeIngredients = includeIngredients.join(',');
  }

  if (excludeIngredients.length && Array.isArray(excludeIngredients)) {
    data.excludeIngredients = excludeIngredients.join(',');
  }

  return data;
};
