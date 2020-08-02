import React from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { sIndex } from './styles';

import * as i from '../../interfaces';

const index = (props: IProps) => {
  const { recipe } = props;
  const c = sIndex();
  return (
    <div className={c.mainContainer}>
      <div>
        <h4>{recipe.title}</h4>
        <p>Source: {recipe.sourceName}</p>
        <p>
          <img className={c.img} src={recipe.image} alt={recipe.title} />
        </p>
      </div>
      <div>
        <h3>Instructions:</h3>
        <div>
          {!!recipe.analyzedInstructions.length &&
            recipe.analyzedInstructions[0].steps.map((s, i) => (
              <p key={i}>
                <strong>Step {s.number}:</strong>
                <div>{s.step}</div>
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

interface IState {
  spoonacular: {
    recipe: {
      pending: boolean;
      data: i.IRecipe;
    };
  };
}

const mapState = (state: IState) => ({
  recipe: state.spoonacular.recipe.data
});
const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface IProps extends PropsFromRedux, RouteComponentProps {}

export default connector(index);
