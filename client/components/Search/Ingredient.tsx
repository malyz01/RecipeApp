import React from 'react';
import Paper from '@material-ui/core/Paper';

import { ingredientStyle } from './styles';

type IngredientProp = {
  name: string;
  onClick?: () => void;
};

const Ingredient = (props: IngredientProp) => {
  const c = ingredientStyle();
  return (
    <Paper className={c.paper} square={false} elevation={4}>
      {props.name}
    </Paper>
  );
};

export default Ingredient;
