import React from 'react';
import Paper from '@material-ui/core/Paper';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { sIngredient } from './styles';

type IngredientProp = {
  name: string;
  onClick?: () => void;
};

const Ingredient = (props: IngredientProp) => {
  const c = sIngredient();
  return (
    <Paper classes={{ root: c.paper }} variant="outlined" square={false}>
      <span className={c.span}>{props.name}</span>
      <HighlightOffIcon fontSize="small" onClick={() => props.onClick()} className={c.icon} />
    </Paper>
  );
};

export default Ingredient;
