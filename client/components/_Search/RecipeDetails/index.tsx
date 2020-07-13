import React from 'react';
import { sIndex } from './styles';

const index = () => {
  const c = sIndex();
  return (
    <div className={c.mainContainer}>
      <img src={'#'} />
      <div className={c.recipeDetailContainer}>
        <div>
          <div>Chicken Tikka</div>
          <div>Time: 30mins</div>
          <div>Servings: 2</div>
        </div>
        <div>You have all the ingredients</div>
      </div>
    </div>
  );
};

export default index;
