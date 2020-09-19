import React, { useState, ChangeEvent, useContext } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Textfield from '@material-ui/core/TextField';
import useStyles from './styles';

import * as I from '../../interface';
import * as spoonacular from '../../store/actions/spoonacular';
import FilterByIngredient from '../../containers/Search/FilterByIngredient';
import FilterInput from '../../containers/Search/FilterInput';

const Home: React.FC<IProps> = (props) => {
  const c = useStyles();
  const [searchQuery, setSearchQuery] = useState<I.IComplexSearch>({
    query: '',
    addRecipeNutrition: true,
    offset: 0
  });
  const [state, setState] = useState({
    include: [],
    exclude: []
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleFilter = (mode: string, fltr: string, val: string) => {
    switch (mode) {
      case 'add':
        if (state[fltr].includes(val)) return;
        return setState({ ...state, [fltr]: [...state[fltr], val] });
      case 'del':
        return setState({ ...state, [fltr]: state[fltr].filter((i: string) => i !== val) });
      case 'clear':
        return setState({ ...state, [fltr]: [] });
      default:
        return;
    }
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
            placeholder="e.g. Chicken Curry"
          />
        </div>
      </section>

      <section>
        <FilterByIngredient summary="Include ingredients">
          <FilterInput name="include" data={state.include} handleFilter={handleFilter} />
        </FilterByIngredient>
        <FilterByIngredient summary="Exclude ingredients">
          <FilterInput name="exclude" data={state.exclude} handleFilter={handleFilter} />
        </FilterByIngredient>
      </section>

      <section></section>
    </main>
  );
};

const mapState = (state) => ({
  recipes: state.spoonacular.recipes.data.results,
  page: state.spoonacular.recipes.data,
  queries: state.queries
});

const mapDispatch = { ...spoonacular };
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface IProps extends PropsFromRedux, RouteComponentProps {}

export default connector(Home);
