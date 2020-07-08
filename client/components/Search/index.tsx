import React from 'react'

import './search.css'

const index = () => {
  return (
    <div className='searchMainContainer'>

      <div className='searchRecipe'>
        <h3 className='searchHeading'>Search by Recipe Name</h3>
        <div className='searchInput'>
          <input className='foodSearch' type='text' placeholder='e.g. Chicken Curry'></input>
        </div>
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

        <div className='NutrionalInfo'>
          <h3>Nutrional Information</h3>
        </div>

        <div className='searchButton'>
          <button>Search</button>
        </div>

      </div>
    </div>
  )
}

export default index
