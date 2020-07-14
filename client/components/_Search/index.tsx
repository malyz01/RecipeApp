import React, { useState, ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Button from '@material-ui/core/Button';
import { sIndex } from './styles';

import FilterByIngredient from './FilterByIngredient';
import FilterByNutri from './FilterByNutri';
import RecipeDetail from './RecipeCard';
import { IComplexSearch } from '../../interfaces';
import * as e from '../../enum/spoonacular';
import * as spoonacular from '../../store/actions/spoonacular';
import validate from './validate';

const index = (props: PropsFromRedux) => {
  const c = sIndex();
  const [searchQuery, setSearchQuery] = useState<IComplexSearch>({
    query: '',
    addRecipeNutrition: true
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setSearchQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    try {
      const params = validate({ ...searchQuery, ...props.queries });
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
        <FilterByIngredient include={true} />
        <FilterByIngredient include={false} />
      </div>

      <div className="NutrionalInfo">
        <FilterByNutri nutrients={props.nutrients} />
      </div>

      <div className={c.btnContainer}>
        <Button onClick={onSubmit} fullWidth variant="contained" color="primary">
          Search
        </Button>
      </div>

      <div>
        {!!props.recipes.length &&
          props.recipes.map((r, i: number) => <RecipeDetail key={i} {...r} />)}
      </div>
    </div>
  );
};

const mapState = (state) => ({
  recipes: state.spoonacular.recipes.data.results,
  queries: state.queries,
  nutrients: state.queries.nutrients
});
const mapDispatch = { ...spoonacular };
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

// If props are passdown
// type Props = PropsFromRedux & {
//   backgroundColor: string
// }

export default connector(index);
