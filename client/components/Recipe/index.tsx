import React, { PureComponent, ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import './style.css';

import * as i from '../../interfaces/spoonacular';
import * as spoonacular from '../../store/actions/spoonacular';

const mapDispatch = { ...spoonacular };
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

// If props are passdown
// type Props = PropsFromRedux & {
//   backgroundColor: string
// }

class index extends PureComponent<PropsFromRedux, i.IComplexSearch> {
  state = {
    query: '',
    minCalories: 0,
    maxCalories: 0,
    minCarbs: 0,
    maxCarbs: 0,
    minProtein: 0,
    maxProtein: 0,
    fillIngredients: true,
    addRecipeInformation: true,
    addRecipeNutrition: true,
    number: 20
  };

  handleClick = () => {
    // Uncomment below to check all the properties, inside curly brace press ctrl + space
    // this.setState({minCarbs});
    this.props.fetchRecipesBy('complexSearch', { params: this.state });
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
    const { query } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <h1>Complex Search Recipes:</h1>
        </div>
        <div style={{ textAlign: 'justify', width: 300, margin: 'auto' }}>
          <div style={{ display: 'flex', marginBottom: 6 }}>
            <div style={{ minWidth: 100 }}>Query:</div>
            <input name="query" type="text" onChange={this.onChange} value={query}></input>
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
            value={this.state.minCarbs}
          ></input>
        </div>

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

        <p>
          <button onClick={this.handleClick}>Send</button>
        </p>
      </div>
    );
  }
}

export default connector(index);
