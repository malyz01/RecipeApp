import React, { useState, ChangeEvent } from 'react';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import './search.css';

import Ingredient from './Ingredient';
import { IComplexSearch } from '../../interfaces/spoonacular';

const index = () => {
  const [searchQuery, setSearchQuery] = useState<IComplexSearch>({ query: '' });
  const [ingredients, setIngredients] = useState({
    includeIngredients: '',
    excludeIngredients: ''
  });
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

  const onSubmit = () => {
    console.log(searchQuery);
  };

  const handleIngredients = (option: string, include: boolean, filter?: string) => () => {
    const action = include ? 'includeIngredients' : 'excludeIngredients';
    let newVal: string[] = (searchQuery[action] as string[]) || [];
    if (option === 'add' && ingredients[action] !== '') newVal.push(ingredients[action]);
    if (option === 'del' && newVal.length) newVal = newVal.filter((i) => i !== filter);

    setSearchQuery((prev) => ({ ...prev, [action]: newVal }));
    setIngredients((prev) => ({ ...prev, [action]: '' }));
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
                value={ingredients.includeIngredients}
              ></input>
              <button onClick={handleIngredients('add', true)}>Add</button>
            </div>
            <div>clear all</div>
          </div>
          <Box display="flex">
            {searchQuery.includeIngredients &&
              Array.isArray(searchQuery.includeIngredients) &&
              searchQuery.includeIngredients.map((ingredient, index) => (
                <Ingredient
                  key={index}
                  name={ingredient}
                  onClick={handleIngredients('del', true, ingredient)}
                />
              ))}
          </Box>
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
                value={ingredients.excludeIngredients}
              ></input>
              <button onClick={handleIngredients('add', false)}>Add</button>
            </div>
            <div>clear all</div>
          </div>
          <Box display="flex">
            {searchQuery.excludeIngredients &&
              Array.isArray(searchQuery.excludeIngredients) &&
              searchQuery.excludeIngredients.map((ingredient, index) => (
                <Ingredient
                  key={index}
                  name={ingredient}
                  onClick={handleIngredients('del', false, ingredient)}
                />
              ))}
          </Box>
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
        <button onClick={onSubmit} className="searchButton">
          Search
        </button>
      </div>
    </div>
  );
};

export default index;
