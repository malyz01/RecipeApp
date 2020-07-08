import React from 'react'


const index = () => {
  return (
    <div className='searchMainContainer'>
      <div className='searchField'>
        <h3>Search by Recipe Name</h3>
        <input type='text' placeholder='e.g. Chicken Curry'></input>
      </div>
      <div className='ingredientFilter'>
        <h3>Search by Ingredients</h3>
        <h4>Included Ingredients:</h4>
        <input type='text' placeholder='e.g. Potato'></input>
        <h4>Excluded Ingredients:</h4>
        <input type='text' placeholder='e.g. Coriander'></input>
      </div>
    </div>
  )
}

export default index
