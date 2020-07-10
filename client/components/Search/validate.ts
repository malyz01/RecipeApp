import { IComplexSearch } from '../../interfaces/spoonacular';

export default (q: IComplexSearch) => {
  if (q.query === '') {
    throw new Error('Cannot be empty');
  }

  if (Array.isArray(q.includeIngredients)) {
    q.includeIngredients = q.includeIngredients.join(',');
  }

  if (Array.isArray(q.excludeIngredients)) {
    q.excludeIngredients = q.excludeIngredients.join(',');
  }

  return q;
};
