import React from 'react';
import { connect } from 'react-redux';

import * as e from '../enum/spoonacular';
import * as i from '../interfaces/spoonacular';
import * as spoonacular from '../store/actions/spoonacular';

const Landing = (props) => {
  const handleClick = () => {
    console.log(props);
    const query: i.ISearch = {
      query: 'Chicken',
      excludeIngredients: 'peas'
    };

    props.fetchRecipesBy(e.Params.search, { params: query });
  };

  return (
    <h1 style={{ textAlign: 'center' }}>
      Landing Page
      <button onClick={handleClick}>Request</button>
    </h1>
  );
};

export default connect(null, { ...spoonacular })(Landing);
