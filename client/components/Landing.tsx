import React from 'react';
import api from '../api';

import * as i from './interfaces/spoonacular';

const Landing = () => {
  const handleClick = () => {
    const params: i.IRecipes = {
      query: 'Chicken',
      excludeIngredients: 'peas'
    };

    api.get('/spoonacular/1', { params });
  };

  return (
    <h1 style={{ textAlign: 'center' }}>
      Landing Page
      <button onClick={handleClick}>Request</button>
    </h1>
  );
};

export default Landing;
