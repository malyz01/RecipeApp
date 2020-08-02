import React from 'react';
import { sIndex } from './styles';

import * as i from '../../../interfaces';

const index = (props: i.IRecipe) => {
  const c = sIndex();
  return (
    <div className={c.mainContainer}>
      <img className={c.image} src={props.image} />
      <div className={c.recipeDetailContainer}>
        <div>
          <div onClick={(e) => e.stopPropagation()}>
            <a href={props.sourceUrl}>{props.title}</a>
          </div>
          <div>Ready in: {props.readyInMinutes}mins</div>
          <div>Servings: {props.servings}</div>
        </div>
        <div>You have all the ingredients</div>
      </div>
    </div>
  );
};

export default index;
