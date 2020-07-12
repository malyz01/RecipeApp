import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Landing from './Landing';
import Search from './_Search';

const App = () => {
  return (
    <HashRouter>
      <Nav />
      <Route exact path="/" component={Landing} />
      <Route exact path="/search" component={Search} />
    </HashRouter>
  );
};

export default App;
