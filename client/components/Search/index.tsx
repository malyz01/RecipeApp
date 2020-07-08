import React, { useState } from 'react';
import Slider from './Slider';

import './search.css';

const index = () => {
  const [protein, setProtein] = useState<number[]>([0, 10]);

  const getVal = (val: number[]) => {
    setProtein(val);
  };

  console.log(protein);
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
        <Slider name="Protein" getValue={getVal} />
      </div>

      <div>
        <button className="searchButton">Search</button>
      </div>
    </div>
  );
};

export default index;
