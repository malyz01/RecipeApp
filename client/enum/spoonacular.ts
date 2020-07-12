export enum Params {
  search = 'search',
  findByIngredients = 'findByIngredients',
  findByNutrients = 'findByNutrients',
  complexSearch = 'complexSearch'
}

export enum EQSearch {
  query = 'query', //required
  cuisine = 'cuisine',
  diet = 'diet',
  excludeIngredients = 'excludeIngredients',
  intolerances = 'intolerances',
  offset = 'offset',
  number = 'number',
  limitLicense = 'limitLicense',
  instructionsRequired = 'instructionsRequired'
}

export enum EQByIngredients {
  ingredients = 'ingredients', //required
  number = 'number',
  limitLicense = 'limitLicense',
  ranking = 'ranking',
  ignorePantry = 'ignorePantry'
}

export enum EQComplex {
  query = 'query', //required
  cuisine = 'cuisine',
  excludeCuisine = 'excludeCuisine',
  diet = 'diet',
  intolerances = 'intolerances',
  equipment = 'equipment',
  includeIngredients = 'includeIngredients',
  excludeIngredients = 'excludeIngredients',
  offset = 'offset',
  number = 'number',
  limitLicense = 'limitLicense',
  instructionsRequired = 'instructionsRequired'
}

export enum ENutrients {
  calories = 'Calories',
  carbs = 'Carbs',
  protein = 'Protein',
  fat = 'Fat',
  fiber = 'Fiber'
}
