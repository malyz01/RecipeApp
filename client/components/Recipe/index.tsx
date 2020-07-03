import React, { PureComponent, ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

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
    fillIngredients: true,
    addRecipeInformation: true,
    addRecipeNutrition: true,
    number: 20
  };

  handleClick = () => {
    // Uncomment below to check all the properties, inside curly brace press ctrl + space
    // this.setState({})
    this.props.fetchRecipesBy('complexSearch', { params: this.state });
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.persist();
    this.setState((prev) => {
      return {
        ...prev,
        query: e.target.value
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
        <div>
          <label>Query</label>
          <input name="query" type="text" onChange={this.onChange} value={query}></input>
        </div>
        <p>
          <button onClick={this.handleClick}>Send</button>
        </p>
      </div>
    );
  }
}

export default connector(index);
