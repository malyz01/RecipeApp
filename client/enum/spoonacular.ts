export enum Params {
  search = 'search',
  findByIngredients = 'findByIngredients',
  findByNutrients = 'findByNutrients',
  complexSearch = 'complexSearch'
}

export enum QSearch {
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

export enum QByIngredients {
  ingredients = 'ingredients', //required
  number = 'number',
  limitLicense = 'limitLicense',
  ranking = 'ranking',
  ignorePantry = 'ignorePantry'
}

export enum QComplex {
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
