import React, { useState, ChangeEvent } from 'react';
import Slider from '@material-ui/core/Slider';

import { IComplexSearch } from '../../interfaces/spoonacular';
import './search.css';

const index = () => {
  const [searchQuery, setSearchQuery] = useState<IComplexSearch>({ query: '' });
  const [ingredients, setIngredients] = useState<{}>({});
  const [nutrients, setNutrients] = useState<{}>({});

  const handleSlider = (nutri: string) => (event: any, newValue: number | number[]) => {
    setNutrients((prev) => ({
      ...prev,
      [nutri]: newValue as number[]
    }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setIngredients((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleIngredients = (option: string, action: string) => () => {
    let newVal = searchQuery[action] || [];
    if (option === 'add') newVal.push(ingredients[action]);
    if (option === 'del' && newVal.length) newVal = newVal.filter((i) => i !== ingredients[action]);

    setSearchQuery((prev) => ({ ...prev, [action]: newVal }));
  };

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
              <input
                name="includeIngredients"
                onChange={onChange}
                type="text"
                placeholder="e.g. Potato"
              ></input>
              <button onClick={handleIngredients('add', 'includeIngredients')}>Add</button>
            </div>
            <div>clear all</div>
          </div>
        </div>

        <div className="ingredientFilter">
          <h4 className="searchHeading">Excluded Ingredients:</h4>
          <div className="ingredientSearch">
            <div>
              <input
                name="excludeIngredients"
                onChange={onChange}
                type="text"
                placeholder="e.g. Coriander"
              ></input>
              <button onClick={handleIngredients('add', 'excludeIngredients')}>Add</button>
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
          onChange={handleSlider('Protein')}
          valueLabelDisplay="auto"
          aria-labelledby="Protein range"
        />
        <Slider
          color="primary"
          defaultValue={[0, 10]}
          max={500}
          onChange={handleSlider('Carbs')}
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
