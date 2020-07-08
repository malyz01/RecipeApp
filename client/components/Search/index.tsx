import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';

import './search.css';

const index = () => {
  const [data, setData] = useState({});
  const [nutrients, setNutrients] = useState({});

  const handleChange = (nutri: string) => (event: any, newValue: number | number[]) => {
    setNutrients((prev) => ({
      ...prev,
      [nutri]: newValue as number
    }));
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
              <input type="text" placeholder="e.g. Potato"></input>
              <button>Add</button>
            </div>
            <div>clear all</div>
          </div>
        </div>

        <div className="ingredientFilter">
          <h4 className="searchHeading">Excluded Ingredients:</h4>
          <div className="ingredientSearch">
            <div>
              <input type="text" placeholder="e.g. Coriander"></input>
              <button>Add</button>
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
