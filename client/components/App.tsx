import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Nav from './Nav';
import Landing from './Landing';
import Search from './_Search';
import { ISample } from '../interfaces/nav';

const App = () => {
  const sample: ISample[] = [
    {
      id: 1,
      name: 'Sample Nav'
    }
  ];

  return (
    <HashRouter>
      <Nav sample={sample} />
      <Route exact path="/" component={Landing} />
      <Route exact path="/search" component={Search} />
    </HashRouter>
  );
};

export default App;
