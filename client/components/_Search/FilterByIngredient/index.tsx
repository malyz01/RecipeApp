import React, { useState, ChangeEvent } from 'react';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typo from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { sIndex } from './styles';

import Ingredient from './Ingredient';
import { IComplexSearch } from '../../../interfaces';
import { capsCamelFirstWord } from '../../helpers';

export interface IHandleQuery {
  key: string;
  val: string[];
}

type IProps = {
  query: IComplexSearch;
  handleQuery: (props: IHandleQuery) => void;
  include: boolean;
};

const index = ({ query, handleQuery, include }: IProps) => {
  const c = sIndex();
  const action = include ? 'includeIngredients' : 'excludeIngredients';
  const placeholder = include ? 'Potato' : 'Coriander';
  const q: string[] = (query[action] as string[]) || [];
  const name = capsCamelFirstWord(action);
  const [ingredients, setIngredients] = useState({
    includeIngredients: '',
    excludeIngredients: ''
  });

  const handleIngredients = (option: string, filter?: string) => () => {
    let newVal: string[] = q;
    if (option === 'add' && ingredients[action] !== '') newVal.push(ingredients[action]);
    if (option === 'del' && newVal.length) newVal = newVal.filter((i) => i !== filter);

    handleQuery({ key: action, val: newVal });
    setIngredients((prev) => ({ ...prev, [action]: '' }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setIngredients((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Accordion classes={{ root: c.accordion }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typo variant="subtitle2">{name} Ingredients:</Typo>
      </AccordionSummary>
      <AccordionDetails>
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
              onClick={() => alert('Add functionality')}
            >
              clear all
            </Button>
          </Box>
          <Box display="flex" flexWrap="wrap">
            {q &&
              Array.isArray(q) &&
              q.map((ingredient, index) => (
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

export default index;
