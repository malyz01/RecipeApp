import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as e from '../enum/spoonacular';
import * as i from '../interfaces/spoonacular';
import * as spoonacular from '../store/actions/spoonacular';

// TODO Changing route must also change queries
const Landing = (props) => {
  const [query, setQuery] = useState({
    query: 'Chicken',
    excludeIngredients: 'peas',
    cuisine: '',
    diet: ''
  });

  const handleQuery = (e) => {
    e.persist();
    setQuery((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = (query: i.ISearch) => () => {
    props.fetchRecipesBy(e.Params.search, { params: query });
  };

  return (
    <h1 style={{ textAlign: 'center' }}>
      Landing Page
      <div>
        <select>
          <option value={e.Params.search}>Search</option>
          <option value={e.Params.complexSearch}>Complex Search</option>
          <option value={e.Params.findByIngredients}>Find by Ingredients</option>
          <option value={e.Params.findByNutrients}>Find by Nutrients</option>
        </select>
        <button onClick={handleClick(query)}>Request</button>
      </div>
      <div>
        <div>
          <input name="query" onChange={handleQuery} value={query.query} type="text" />
        </div>
        <div>
          <input
            name="excludeIngredients"
            onChange={handleQuery}
            value={query.excludeIngredients}
            type="text"
          />
        </div>
        <div>
          <input name="diet" onChange={handleQuery} value={query.diet} type="text" />
        </div>
        <div>
          <input name="cuisine" onChange={handleQuery} value={query.cuisine} type="text" />
        </div>
      </div>
    </h1>
  );
};

export default connect(null, { ...spoonacular })(Landing);
