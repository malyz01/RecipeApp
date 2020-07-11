import React, { useState, ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Button from '@material-ui/core/Button';
import { indexStyle } from './styles';
import './search.css';

import FilterIngredient, { IHandleQuery } from './FilterIngredient';
import Nutrient from './Nutrient';
import { IComplexSearch } from '../../interfaces/spoonacular';
import * as e from '../../enum/spoonacular';
import * as spoonacular from '../../store/actions/spoonacular';
import validate from './validate';

const index = (props: PropsFromRedux) => {
  const c = indexStyle();
  const [searchQuery, setSearchQuery] = useState<IComplexSearch>({ query: '' });
  const [nutrients, setNutrients] = useState<{}>({});

  // TODO handle all external state
  const handleQuery = (prop: IHandleQuery) => {
    setSearchQuery((prev) => ({ ...prev, [prop.key]: prop.val }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setSearchQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    try {
      const params = validate(searchQuery, nutrients);
      props.fetchRecipesBy(e.Params.complexSearch, { params });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className={c.mainContainer}>
      <div className="searchRecipe">
        <h3 className={c.searchHeading}>Search by Recipe Name</h3>
        <div className={c.searchInputContainer}>
          <input
            className={c.searchInput}
            name="query"
            onChange={onChange}
            value={searchQuery.query}
            type="text"
            placeholder="e.g. Chicken Curry"
          ></input>
        </div>
      </div>

      <div className="searchIngredients">
        <h3>Search by Ingredients</h3>
        <FilterIngredient query={searchQuery} handleQuery={handleQuery} include={true} />
        <FilterIngredient query={searchQuery} handleQuery={handleQuery} include={false} />
      </div>

      <div className="NutrionalInfo">
        <Nutrient />
      </div>

      <div>
        <Button onClick={onSubmit} fullWidth variant="contained" color="primary">
          Search
        </Button>
      </div>
    </div>
  );
};

const mapDispatch = { ...spoonacular };
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

// If props are passdown
// type Props = PropsFromRedux & {
//   backgroundColor: string
// }

export default connector(index);
