import React from 'react';
import Paper from '@material-ui/core/Paper';

type IngredientProp = {
  name: string;
  onClick?: () => void;
};

const Ingredient = (props: IngredientProp) => {
  return (
    <Paper square={false} elevation={4}>
      {props.name}
    </Paper>
  );
};

export default Ingredient;
