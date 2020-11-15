import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/layout/Nav';
import Page from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Page.Home} />
        <Route exact path="/recipe/view/:id" component={Page.Recipe_View} />
        <Route exact path="*" component={Page.NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
