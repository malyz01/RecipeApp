import React from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { sIndex } from './styles';

import * as i from '../../interfaces';

const index = (props: IProps) => {
  const c = sIndex();
  return (
    <div className={c.mainContainer}>
      <div>
        <h4>Recipe Details</h4>
        <p>Source: {props.recipe.sourceName}</p>
        <p>
          <img src={props.recipe.image} alt={props.recipe.title} />
        </p>
        <p>Etc </p>
      </div>
      <div>{props.recipe.summary}</div>
      <div>Instructions component</div>
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
