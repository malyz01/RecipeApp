import React, { PureComponent, MouseEvent } from 'react';

import * as e from '../../enum/spoonacular';

export class index extends PureComponent {
  state = {
    queries: {},
    route: ''
  };

  handleClick = (e: MouseEvent) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div>
          <h1>Search Recipes:</h1>
          <select>
            <option value={e.Params.search}>Search</option>
            <option value={e.Params.complexSearch}>Complex Search</option>
            <option value={e.Params.findByIngredients}>Find by Ingredients</option>
            <option value={e.Params.findByNutrients}>Find by Nutrients</option>
          </select>
          <button onClick={this.handleClick}>Request</button>
        </div>
        <div></div>
      </div>
    );
  }
}

export default index;
