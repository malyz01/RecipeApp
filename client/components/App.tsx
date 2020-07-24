import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Landing from './Landing';
import Search from './_Search';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/recipes/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
