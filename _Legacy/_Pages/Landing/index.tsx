import React from 'react';

import Links from './Links';
import { sIndex } from './styles';

const Landing = (props) => {
  const c = sIndex();
  return (
    <div className={c.mainContainer}>
      <h1>Welcome!</h1>
      <Links {...props} />
    </div>
  );
};

export default Landing;
