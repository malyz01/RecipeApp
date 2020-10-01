import React from 'react';
import useStyles from './styles/notFound';

const NotFound = () => {
  const c = useStyles();
  return (
    <div className={c.mainContainer}>
      <h1>Sorry! URL does not exist!</h1>
    </div>
  );
};

export default NotFound;
