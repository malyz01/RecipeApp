import React, { useState, ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Textfield from '@material-ui/core/TextField';
import useStyles from './homeStyle';

import * as I from '../../interface';
import * as spoonacular from '../../store/actions/spoonacular';
import FilterByIngredient from '../../containers/Search/FilterByIngredient';

const Home: React.FC<IProps> = (props) => {
  const c = useStyles();
  const [searchQuery, setSearchQuery] = useState<I.IComplexSearch>({
    query: '',
    addRecipeNutrition: true,
    offset: 0
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  return (
    <main className={c.mainContainer}>
      <section className="searchRecipe">
        <h3 className={c.searchHeading}>Search by Recipe Name</h3>
        <div className={c.searchInputContainer}>
          <Textfield
            className={c.searchInput}
            variant="outlined"
            name="query"
            onChange={onChange}
            value={searchQuery.query}
            type="text"
            placeholder="e.g. Chicken Curry"
          />
        </div>
      </section>

      <section>
        <FilterByIngredient>
          <Textfield
            className={c.searchInput}
            variant="outlined"
            name="query"
            onChange={onChange}
            value={searchQuery.query}
            type="text"
            placeholder="e.g. Chicken Curry"
          />
        </FilterByIngredient>
        <FilterByIngredient>
          <Textfield
            className={c.searchInput}
            variant="outlined"
            name="query"
            onChange={onChange}
            value={searchQuery.query}
            type="text"
            placeholder="e.g. Chicken Curry"
          />
        </FilterByIngredient>
      </section>
    </main>
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

export default connector(Home);
