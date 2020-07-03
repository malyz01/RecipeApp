export interface IRecipeInformation {
  includeNutrition?: boolean;
}

export interface ISimilarRecipes {
  number?: number;
  limitLicense?: boolean;
}

export interface IAnalyzedRecipeInstructions {
  stepBreakdown?: boolean;
}

export interface ISearch {
  query: string;
  cuisine?: string;
  diet?: string;
  excludeIngredients?: string;
  intolerances?: string;
  offset?: number;
  number?: number;
  limitLicense?: boolean;
  instructionsRequired?: boolean;
}

export interface IQueries {
  params: {};
}
