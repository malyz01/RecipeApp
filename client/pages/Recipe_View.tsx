import React from 'react';
import useStyles from './styles/recipe_view';

const Recipe_Id = (props) => {
  const c = useStyles();
  console.log(props);
  return (
    <main className={c.mainContainer}>
      <h1>Recipe information should be displayed here</h1>
    </main>
  );
};

export default Recipe_Id;
