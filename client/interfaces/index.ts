export interface IData {
  pending: boolean;
  data: object;
}

export interface IAction {
  type: string;
  payload: object | Array<object> | string;
}

export interface IQueries {
  params: IComplexSearch;
}

export interface INutrients {
  Calories: number[];
  Carbs: number[];
  Protein: number[];
  Fat: number[];
  Fiber: number[];
}

export interface IIngredients {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface IEquipment extends IIngredients {}

export interface ISteps {
  number: number;
  step: string;
  ingredients: IIngredients[];
  equipment: IEquipment[];
}

export interface IAnalyzedInstructions {
  name: string;
  steps: ISteps[];
}

export interface INutrition {
  title: string;
  amount: number;
  unit: string;
}

export interface IRecipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings?: number;
  readyInMinutes?: number;
  cuisines?: [];
  nutrition?: INutrition[];
  sourceName?: string;
  sourceUrl?: string;
  pricePerServing?: number;
  analyzedInstructions?: IAnalyzedInstructions[];
  wineParing?: {};
  occasions?: [];
  diets?: string[];
  aggregateLikes?: number;
  lowFodmap?: boolean;
  gaps?: string;
  spoonacularScore?: number;
  healthScore?: number;
  dishTypes?: string[];
  summary?: string;
  license?: string;
  weightWatcherSmartPoints?: number;
  creditsText?: string;
  sustainable?: boolean;
  veryPopular?: boolean;
  cheap?: boolean;
  veryHealthy?: boolean;
  dairyFree?: boolean;
  glutenFree?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
}

export interface IComplexSearch {
  query: string;
  nutrients?: INutrients;
  cuisine?: string;
  excludeCuisine?: string;
  diet?: string;
  intolerances?: string;
  equipment?: string;
  includeIngredients?: string[] | string;
  excludeIngredients?: string[] | string;
  type?: string;
  instructionsRequired?: boolean;
  fillIngredients?: boolean;
  addRecipeInformation?: boolean;
  addRecipeNutrition?: boolean;
  author?: string;
  tags?: string;
  recipeBoxId?: number;
  titleMatch?: string;
  maxReadyTime?: number;
  ignorePantry?: boolean;
  sort?: string;
  sortDirection?: string;
  minCarbs?: number;
  maxCarbs?: number;
  minProtein?: number;
  maxProtein?: number;
  minCalories?: number;
  maxCalories?: number;
  minFat?: number;
  maxFat?: number;
  minAlcohol?: number;
  maxAlcohol?: number;
  minCaffeine?: number;
  maxCaffeine?: number;
  minCopper?: number;
  maxCopper?: number;
  minCalcium?: number;
  maxCalcium?: number;
  minCholine?: number;
  maxCholine?: number;
  minCholesterol?: number;
  maxCholesterol?: number;
  minFluoride?: number;
  maxFluoride?: number;
  minSaturatedFat?: number;
  maxSaturatedFat?: number;
  minVitaminA?: number;
  maxVitaminA?: number;
  minVitaminC?: number;
  maxVitaminC?: number;
  minVitaminD?: number;
  maxVitaminD?: number;
  minVitaminE?: number;
  maxVitaminE?: number;
  minVitaminK?: number;
  maxVitaminK?: number;
  minVitaminB1?: number;
  maxVitaminB1?: number;
  minVitaminB2?: number;
  maxVitaminB2?: number;
  minVitaminB5?: number;
  maxVitaminB5?: number;
  minVitaminB3?: number;
  maxVitaminB3?: number;
  minVitaminB6?: number;
  maxVitaminB6?: number;
  minVitaminB12?: number;
  maxVitaminB12?: number;
  minFiber?: number;
  maxFiber?: number;
  minFolate?: number;
  maxFolate?: number;
  minFolicAcid?: number;
  maxFolicAcid?: number;
  minIodine?: number;
  maxIodine?: number;
  minIron?: number;
  maxIron?: number;
  minMagnesium?: number;
  maxMagnesium?: number;
  minManganese?: number;
  maxManganese?: number;
  minPhosphorus?: number;
  maxPhosphorus?: number;
  minPotassium?: number;
  maxPotassium?: number;
  minSelenium?: number;
  maxSelenium?: number;
  minSodium?: number;
  maxSodium?: number;
  minSugar?: number;
  maxSugar?: number;
  minZinc?: number;
  maxZinc?: number;
  offset?: number;
  number?: number;
  limitLicense?: boolean;
}
