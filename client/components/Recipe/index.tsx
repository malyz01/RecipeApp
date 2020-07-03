import React, { PureComponent, FormEvent } from 'react';
import { connect } from 'react-redux';

import * as e from '../../enum/spoonacular';
import * as i from '../../interfaces/spoonacular';
import * as spoonacular from '../../store/actions/spoonacular';

class index extends PureComponent {
  state = {
    query: '',
    fillIngredients: true,
    addRecipeInformation: true,
    addRecipeNutrition: true,
    number: 20
  };

  handleClick = (): void => {
    this.props.fetchRecipesBy('complexSearch', { params: this.state });
  };

  onChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState((prev) => {
      return {
        ...prev,
        query: e.currentTarget.value
      };
    });
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <div>
          <h1>Complex Search Recipes:</h1>
          <button onClick={this.handleClick}>Request</button>
        </div>
        <div>
          <label>Query</label>
          <input name="query" type="text" onChange={this.onChange} value={query}></input>
        </div>
      </div>
    );
  }
}

export default connect(null, spoonacular)(index);
