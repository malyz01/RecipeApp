import React, { useState, ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typo from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { sIndex } from './styles';

import Ingredient from './Ingredient';
import * as queries from '../../../../store/actions/queries';
import { capsCamelFirstWord } from '../../../../utils';

const index = (props: Props) => {
  const c = sIndex();
  const action = props.include ? 'includeIngredients' : 'excludeIngredients';
  const placeholder = props.include ? 'Potato' : 'Coriander';
  const name = capsCamelFirstWord(action);
  const [ingredients, setIngredients] = useState({
    includeIngredients: '',
    excludeIngredients: ''
  });

  const handleIngredients = (option: string, filter?: string) => () => {
    let newVal: string[] = props[action];

    if (option === 'add' && ingredients[action] !== '') {
      newVal.push(ingredients[action]);
    }
    if (option === 'del' && newVal.length) {
      newVal = newVal.filter((i) => i !== filter);
    }
    props.setIngredientQuery({ key: action, value: newVal });
    setIngredients((prev) => ({ ...prev, [action]: '' }));
  };

  const handleClearAll = () => {
    props.setIngredientQuery({ key: action, value: [] });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setIngredients((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Accordion classes={{ root: c.accordion }}>
      <AccordionSummary
        className={c.accordionSummary}
        classes={{ expanded: c.expanded }}
        IconButtonProps={{ size: 'small' }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typo variant="subtitle2">{name} Ingredients:</Typo>
      </AccordionSummary>
      <AccordionDetails className={c.accordionDetails}>
        <Box className={c.accordionDetailsContainer}>
          <Box display="flex" justifyContent="space-between">
            <div>
              <input
                name={action}
                onChange={onChange}
                type="text"
                placeholder={`e.g. ${placeholder}`}
                value={ingredients[action]}
              ></input>
              <Button
                className={c.button}
                variant="contained"
                color="primary"
                onClick={handleIngredients('add')}
              >
                Add
              </Button>
            </div>
            <Button
              className={c.button}
              variant="contained"
              color="secondary"
              onClick={handleClearAll}
            >
              clear all
            </Button>
          </Box>
          <Box display="flex" flexWrap="wrap">
            {props[action] &&
              Array.isArray(props[action]) &&
              props[action].map((ingredient, index) => (
                <Ingredient
                  key={index}
                  name={ingredient}
                  onClick={handleIngredients('del', ingredient)}
                />
              ))}
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

const mapState = (state) => ({
  includeIngredients: state.queries.includeIngredients,
  excludeIngredients: state.queries.excludeIngredients
});
const mapDispatch = { ...queries };

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  include: boolean;
}

export default connector(index);
