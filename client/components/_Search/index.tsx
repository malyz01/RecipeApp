import React, { useState, ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import { sIndex } from './styles';

import FilterByIngredient from './FilterByIngredient';
import FilterByNutri from './FilterByNutri';
import RecipeDetail from './RecipeCard';
import * as i from '../../interfaces';
import * as e from '../../enum/spoonacular';
import * as spoonacular from '../../store/actions/spoonacular';
import validate from './validate';

const index = (props: IProps) => {
  const c = sIndex();
  const [searchQuery, setSearchQuery] = useState<i.IComplexSearch>({
    query: '',
    addRecipeNutrition: true,
    offset: 0
  });

  console.log(props);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setSearchQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSelect = (recipe: i.IRecipe) => {
    props.selectRecipe(recipe);
    props.history.push(`/recipes/${recipe.id}`);
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
        <FilterByNutri />
      </div>

      <div className={c.btnContainer}>
        <Button onClick={onSubmit} fullWidth variant="contained" color="primary">
          Search
        </Button>
      </div>

      <div>
        {!!props.recipes.length && (
          <>
            {props.recipes.map((r: i.IRecipe, i: number) => (
              <div onClick={() => onSelect(r)} key={i}>
                <RecipeDetail {...r} />
              </div>
            ))}
            <Pagination
              count={props.page.totalResults}
              onChange={(e, pageNum) => {
                setSearchQuery((s) => ({ ...s, offset: pageNum * 10 - 10 }));
                onSubmit();
              }}
              showFirstButton
              showLastButton
            />
          </>
        )}
      </div>
    </div>
  );
};

const mapState = (state) => ({
  recipes: state.spoonacular.recipes.data.results,
  page: state.spoonacular.recipes.data,
  queries: state.queries,
  nutrients: state.queries.nutrients
});
const mapDispatch = { ...spoonacular };
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface IProps extends PropsFromRedux, RouteComponentProps {}

export default connector(index);
