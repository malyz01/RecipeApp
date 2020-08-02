import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Landing from './_Landing';
import Search from './_Search';
import RecipeDetail from './_RecipeDetail';
import UDE from './_UrlDoesNotExist';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/recipes/search" component={Search} />
        <Route exact path="/recipes/:id" component={RecipeDetail} />
        <Route exact path="*" component={UDE} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
