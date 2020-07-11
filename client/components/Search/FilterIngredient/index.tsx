import React, { useState, ChangeEvent } from 'react';
import Box from '@material-ui/core/Box';

import Ingredient from './Ingredient';
import { IComplexSearch } from '../../../interfaces/spoonacular';
import { capsCamelFirstWord } from '../../helpers';

export interface IHandleSearch {
  key: string;
  val: string[];
}

type IProps = {
  search: IComplexSearch;
  handleSearch: (props: IHandleSearch) => void;
  include: boolean;
};

const index = ({ search, handleSearch, include }: IProps) => {
  const action = include ? 'includeIngredients' : 'excludeIngredients';
  const query: string[] = (search[action] as string[]) || [];
  const name = capsCamelFirstWord(action);
  const [ingredients, setIngredients] = useState({
    includeIngredients: '',
    excludeIngredients: ''
  });

  const handleIngredients = (option: string, filter?: string) => () => {
    let newVal: string[] = (search[action] as string[]) || [];
    if (option === 'add' && ingredients[action] !== '') newVal.push(ingredients[action]);
    if (option === 'del' && newVal.length) newVal = newVal.filter((i) => i !== filter);

    handleSearch({ key: action, val: newVal });
    setIngredients((prev) => ({ ...prev, [action]: '' }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setIngredients((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="ingredientFilter">
      <h4 className="searchHeading">{name} Ingredients:</h4>
      <div className="ingredientSearch">
        <div>
          <input
            name={action}
            onChange={onChange}
            type="text"
            placeholder={`e.g. ${include ? 'Potato' : 'Coriander'} `}
            value={ingredients[action]}
          ></input>
          <button onClick={handleIngredients('add')}>Add</button>
        </div>
        <div>clear all</div>
      </div>
      <Box display="flex">
        {query &&
          Array.isArray(query) &&
          query.map((ingredient, index) => (
            <Ingredient
              key={index}
              name={ingredient}
              onClick={handleIngredients('del', ingredient)}
            />
          ))}
      </Box>
    </div>
  );
};

export default index;
