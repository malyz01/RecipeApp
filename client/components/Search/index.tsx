import React, { useState, ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Slider from '@material-ui/core/Slider';
import './search.css';

import FilterIngredient, { IHandleQuery } from './FilterIngredient';
import { IComplexSearch } from '../../interfaces/spoonacular';
import * as e from '../../enum/spoonacular';
import validate from './validate';
import * as spoonacular from '../../store/actions/spoonacular';

const index = (props: PropsFromRedux) => {
  const [searchQuery, setSearchQuery] = useState<IComplexSearch>({ query: '' });
  const [nutrients, setNutrients] = useState<{}>({});

  const handleSlider = (nutri: string) => (event: any, newValue: number | number[]) => {
    setNutrients((prev) => ({
      ...prev,
      [nutri]: newValue as number[]
    }));
  };

  const handleQuery = (prop: IHandleQuery) => {
    setSearchQuery((prev) => ({ ...prev, [prop.key]: prop.val }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setSearchQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    try {
      const queries = validate(searchQuery, nutrients);
      props.fetchRecipesBy(e.Params.complexSearch, { params: queries });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="searchMainContainer">
      <div className="searchRecipe">
        <h3 className="searchHeading">Search by Recipe Name</h3>
        <div className="searchInput">
          <input
            className="foodSearch"
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
        <h3>Nutrional Information</h3>
        <select>
          {Object.values(e.ENutrients).map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
        <Slider
          color="primary"
          defaultValue={[0, 10]}
          max={200}
          onChange={handleSlider('Protein')}
          valueLabelDisplay="auto"
          aria-labelledby="Protein range"
        />
        <Slider
          color="primary"
          defaultValue={[0, 10]}
          max={500}
          onChange={handleSlider('Carbs')}
          valueLabelDisplay="auto"
          aria-labelledby="Carbs range"
        />
      </div>

      <div>
        <button onClick={onSubmit} className="searchButton">
          Search
        </button>
      </div>
    </div>
  );
};

const mapDispatch = {
  ...spoonacular
};
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

// If props are passdown
// type Props = PropsFromRedux & {
//   backgroundColor: string
// }

export default connector(index);
