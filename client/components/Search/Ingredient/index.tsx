import React, { useState, ChangeEvent } from 'react';
import Box from '@material-ui/core/Box';

import { IComplexSearch } from '../../../interfaces/spoonacular';
import Ingredient from './Ingredient';

interface IHandleSearch {
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
      <h4 className="searchHeading">Included Ingredients:</h4>
      <div className="ingredientSearch">
        <div>
          <input
            name="includeIngredients"
            onChange={onChange}
            type="text"
            placeholder="e.g. Potato"
            value={ingredients.includeIngredients}
          ></input>
          <button onClick={handleIngredients('add')}>Add</button>
        </div>
        <div>clear all</div>
      </div>
      <Box display="flex">
        {search.includeIngredients &&
          Array.isArray(search.includeIngredients) &&
          search.includeIngredients.map((ingredient, index) => (
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
