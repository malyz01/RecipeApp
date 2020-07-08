import React from 'react'


const index = () => {
  return (
    <div className='searchMainContainer'>
      <div className='searchRecipe'>
        <h3>Search by Recipe Name</h3>
        <input type='text' placeholder='e.g. Chicken Curry'></input>
      </div>
      <div className='searchIngredients'>
        <h3>Search by Ingredients</h3>
        <div className='ingredientFilter'>
          <h4>Included Ingredients:</h4>
          <input type='text' placeholder='e.g. Potato'></input>
          <button>Add</button>
          <a>clear all</a>
        </div>
        <div className='ingredientFilter'>
          <h4>Excluded Ingredients:</h4>
          <input type='text' placeholder='e.g. Coriander'></input>
          <button>Add</button>
          <a>clear all</a>
        </div>
      </div>
    </div>
  )
}

export default index
