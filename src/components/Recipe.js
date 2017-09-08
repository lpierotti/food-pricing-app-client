import React from 'react'

const Recipe = (props) => {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h3>{props.data.ingredients ? props.data.ingredients.map(ingredient => <li>{ingredient}</li>) : null}</h3>
      <p> Recipe Cost: $1</p>
    </div>
  )
}

export default Recipe 