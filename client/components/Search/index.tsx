import React, { useState, ChangeEvent } from 'react';
import Slider from '@material-ui/core/Slider';

import { IComplexSearch } from '../../interfaces/spoonacular';
import './search.css';

const index = () => {
  const [searchQuery, setSearchQuery] = useState<IComplexSearch>({ query: '' });
  const [ingredients, setIngredients] = useState<{}>({});
  const [nutrients, setNutrients] = useState<{}>({});

  const handleChange = (nutri: string) => (event: any, newValue: number | number[]) => {
    setNutrients((prev) => ({
      ...prev,
      [nutri]: newValue as number[]
    }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleIngredients = (option: string, action: string) => () => {
    let ingredients = searchQuery[action] || [];
    if (option === 'add') ingredients.push(ingredients[action]);
    if (option === 'del' && ingredients.length)
      ingredients = ingredients.filter((i) => i !== ingredients[action]);

    setSearchQuery((prev) => ({
      ...prev,
      [action]: ingredients
    }));
  };

  console.log(ingredients);

  return (
    <div className="searchMainContainer">
      <div className="searchRecipe">
        <h3 className="searchHeading">Search by Recipe Name</h3>
        <div className="searchInput">
          <input className="foodSearch" type="text" placeholder="e.g. Chicken Curry"></input>
        </div>
      </div>

      <div className="searchIngredients">
        <h3>Search by Ingredients</h3>
        <div className="ingredientFilter">
          <h4 className="searchHeading">Included Ingredients:</h4>
          <div className="ingredientSearch">
            <div>
              <input name="includeIngredients" type="text" placeholder="e.g. Potato"></input>
              <button onClick={handleIngredients('add', 'includeIngredients')}>Add</button>
            </div>
            <div>clear all</div>
          </div>
        </div>

        <div className="ingredientFilter">
          <h4 className="searchHeading">Excluded Ingredients:</h4>
          <div className="ingredientSearch">
            <div>
              <input type="text" placeholder="e.g. Coriander"></input>
              <button name="excludeIngredients">Add</button>
            </div>
            <div>clear all</div>
          </div>
        </div>
      </div>

      <div className="NutrionalInfo">
        <h3>Nutrional Information</h3>
        <Slider
          color="primary"
          defaultValue={[0, 10]}
          max={200}
          onChange={handleChange('Protein')}
          valueLabelDisplay="auto"
          aria-labelledby="Protein range"
        />
        <Slider
          color="primary"
          defaultValue={[0, 10]}
          max={500}
          onChange={handleChange('Carbs')}
          valueLabelDisplay="auto"
          aria-labelledby="Carbs range"
        />
      </div>

      <div>
        <button className="searchButton">Search</button>
      </div>
    </div>
  );
};

export default index;
