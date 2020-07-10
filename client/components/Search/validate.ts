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
