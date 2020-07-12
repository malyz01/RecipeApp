import React, { PureComponent, ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import './style.css';

import * as i from '../../interfaces';
import * as spoonacular from '../../store/actions/spoonacular';
import Recipe from './Recipes';

const mapState = (state) => ({ recipes: state.spoonacular.recipes.data.results });
const mapDispatch = { ...spoonacular };
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

// If props are passdown
// type Props = PropsFromRedux & {
//   backgroundColor: string
// }

class index extends PureComponent<PropsFromRedux, i.IComplexSearch> {
  state = {
    query: '',
    excludeIngredients: '',
    includeIngredients: '',
    minCalories: 0,
    maxCalories: 200,
    minCarbs: 0,
    maxCarbs: 100,
    minProtein: 0,
    maxProtein: 100,
    minFat: 0,
    maxFat: 20,
    fillIngredients: true,
    addRecipeInformation: true,
    addRecipeNutrition: true,
    number: 5
  };

  handleClick = async () => {
    // Uncomment below to check all the properties, inside curly brace press ctrl + space
    // this.setState({includeIngredients});
    await this.props.fetchRecipesBy('complexSearch', { params: this.state });
    localStorage.setItem('result', JSON.stringify(this.props.recipes));
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.persist();
    this.setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    });
  };

  render() {
    const lastResult = JSON.parse(localStorage.getItem('result')) || [];
    const { query, includeIngredients, excludeIngredients } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <h1>Complex Search Recipes:</h1>
        </div>
        <div style={{ textAlign: 'justify', width: 300, margin: 'auto' }}>
          <div style={{ display: 'flex', marginBottom: 6 }}>
            <div style={{ minWidth: 100 }}>Food:</div>
            <input name="query" type="text" onChange={this.onChange} value={query}></input>
          </div>
          <div style={{ display: 'flex', marginBottom: 6 }}>
            <div style={{ minWidth: 100 }}>Exclude:</div>
            <input
              name="excludeIngredients"
              type="text"
              onChange={this.onChange}
              value={excludeIngredients}
            ></input>
          </div>
          <div style={{ display: 'flex', marginBottom: 6 }}>
            <div style={{ minWidth: 100 }}>Include:</div>
            <input
              name="includeIngredients"
              type="text"
              onChange={this.onChange}
              value={includeIngredients}
            ></input>
          </div>
          <div style={{ display: 'flex', marginBottom: 6 }}>
            <div style={{ minWidth: 100 }}>Results: </div>
            <input
              name="number"
              type="number"
              onChange={this.onChange}
              value={this.state.number}
            ></input>
          </div>
        </div>

        <p>Additional options:</p>

        <div className="optionsContainer">
          <div className="optionContainer">
            <p>Calories</p>
            <div>
              <label>min</label>
              <input
                className="input"
                name="minCalories"
                type="number"
                onChange={this.onChange}
                value={this.state.minCalories}
              ></input>
              <label>max</label>
              <input
                className="input"
                name="maxCalories"
                type="number"
                onChange={this.onChange}
                value={this.state.maxCalories}
              ></input>
            </div>
          </div>

          <div className="optionContainer">
            <p>Carbohydrates</p>
            <div>
              <label>min</label>
              <input
                className="input"
                name="minCarbs"
                type="number"
                onChange={this.onChange}
                value={this.state.minCarbs}
              ></input>
              <label>max</label>
              <input
                className="input"
                name="maxCarbs"
                type="number"
                onChange={this.onChange}
                value={this.state.maxCarbs}
              ></input>
            </div>
          </div>

          <div className="optionContainer">
            <p>Protein</p>
            <div>
              <label>min</label>
              <input
                className="input"
                name="minProtein"
                type="number"
                onChange={this.onChange}
                value={this.state.minProtein}
              ></input>
              <label>max</label>
              <input
                className="input"
                name="maxProtein"
                type="number"
                onChange={this.onChange}
                value={this.state.maxProtein}
              ></input>
            </div>
          </div>

          <div className="optionContainer">
            <p>Fats</p>
            <div>
              <label>min</label>
              <input
                className="input"
                name="minFat"
                type="number"
                onChange={this.onChange}
                value={this.state.minFat}
              ></input>
              <label>max</label>
              <input
                className="input"
                name="maxFat"
                type="number"
                onChange={this.onChange}
                value={this.state.maxFat}
              ></input>
            </div>
          </div>
        </div>

        <p>
          <button onClick={this.handleClick}>Get Recipes</button>
        </p>

        <div className="recipeContainer">
          {this.props.recipes.length
            ? this.props.recipes.map((r, i) => <Recipe key={i} data={r} />)
            : lastResult.length
            ? lastResult.map((r, i) => <Recipe key={i} data={r} />)
            : ''}
        </div>
      </div>
    );
  }
}

export default connector(index);
