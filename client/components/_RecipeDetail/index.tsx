import React from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import * as i from '../../interfaces';

const index = (props: IProps) => {
  return (
    <div>
      <div>
        <h4>Recipe Details</h4>
        <p>Source: </p>
        <p>Image </p>
        <p>Etc </p>
      </div>
      <div>Ingredients component</div>
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
