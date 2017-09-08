import React from 'react'

const Recipe = (props) => {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h3>{props.data.yield}</h3>
      <h3>{props.data.ingredients ? props.data.ingredients.map(ingredient => <li>{ingredient.text}{ingredient.weight}</li>) : null}</h3>
      
      <p> Recipe Cost: $1</p>
    </div>
  )
}

export default Recipe 

// list restaurants, then you can click a restaurant, and it will display the menu