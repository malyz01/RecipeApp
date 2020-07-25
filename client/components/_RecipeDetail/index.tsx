import React from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

const index = (props: IProps) => {
  console.log(props.recipe);
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

const mapState = (state) => ({
  recipe: state.spoonacular.recipe.data
});
const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface IProps extends PropsFromRedux, RouteComponentProps {}

export default connector(index);
