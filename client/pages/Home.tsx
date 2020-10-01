import React, { useState, ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField';
import useStyles from './styles/home';

import * as I from '../interface';
import * as spoonacular from '../store/actions/spoonacular';
import Accordion from '../components/Accordion';
import FilterInput from '../containers/Home/FilterInput';
import RecipeCard from '../containers/Home/RecipeCard';
import validate from '../containers/Home/validate';

const Home: React.FC<IProps> = (props) => {
  const { fetchRecipesBy, recipes } = props;
  const c = useStyles();
  const [searchQuery, setSearchQuery] = useState<I.IComplexSearch>({
    query: '',
    addRecipeNutrition: true,
    offset: 0
  });
  const [state, setState] = useState({
    includeIngredients: [],
    excludeIngredients: []
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const onSearch = () => {
    try {
      const params = validate({ ...searchQuery, ...state });
      fetchRecipesBy('complexSearch', { params });
    } catch (err) {
      alert(err.message);
    }
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
      <section className={c.section}>
        <Typography variant="h6" className={c.searchHeading}>
          Search by recipe name
        </Typography>
        <div className={c.searchContainer}>
          <Textfield
            className={c.searchInput}
            InputProps={{ className: c.input }}
            variant="outlined"
            name="query"
            onChange={onChange}
            value={searchQuery.query}
            placeholder="e.g. Chicken Curry"
          />
          <Button className={c.searchBtn} onClick={onSearch} color="primary" variant="contained">
            Search
          </Button>
        </div>
      </section>

      <section className={c.section}>
        <Typography variant="subtitle2" className={c.searchHeading}>
          Filter by ingredients
        </Typography>
        <Accordion summary="Include ingredients">
          <FilterInput
            name="includeIngredients"
            data={state.includeIngredients}
            handleFilter={handleFilter}
          />
        </Accordion>
        <Accordion summary="Exclude ingredients">
          <FilterInput
            name="excludeIngredients"
            data={state.excludeIngredients}
            handleFilter={handleFilter}
          />
        </Accordion>
      </section>

      <section>
        {!!recipes.length && recipes.map((res) => <RecipeCard key={res.id} {...res} />)}
      </section>
    </main>
  );
};

const mapState = (state) => ({
  recipes: state.spoonacular.recipes.data.results,
  page: state.spoonacular.recipes.data
});

const mapDispatch = { ...spoonacular };
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface IProps extends PropsFromRedux, RouteComponentProps {}

export default connector(Home);
