import React from 'react';
import Paper from '@material-ui/core/Paper';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { ingredientStyle } from './styles';

type IngredientProp = {
  name: string;
  onClick?: () => void;
};

const Ingredient = (props: IngredientProp) => {
  const c = ingredientStyle();
  return (
    <Paper className={c.paper} square={false} elevation={4}>
      <span className={c.span}>{props.name}</span>
      <HighlightOffIcon fontSize="small" onClick={() => props.onClick()} className={c.icon} />
    </Paper>
  );
};

export default Ingredient;
