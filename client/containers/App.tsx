import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Pages from './_Pages';
import Home from '../pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes/search" component={Pages.Search} />
        <Route exact path="/recipes/:id" component={Pages.RecipeDetail} />
        <Route exact path="*" component={Pages.UrlDNE} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
