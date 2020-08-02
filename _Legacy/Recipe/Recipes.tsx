import React from 'react';

import './style.css';

const Recipes = ({ data }) => {
  console.log(data);
  return (
    <div className="resultContainer">
      <div>
        <img src={data.image} alt="pics" />
      </div>
      <p>
        <a href={data.spoonacularSourceUrl || data.sourceUrl}>{data.title}</a>
      </p>
    </div>
  );
};

export default Recipes;
