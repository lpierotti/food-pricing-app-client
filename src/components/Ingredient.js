import React from 'react'

const Ingredient = (props) => {

  function filteredName(name) {
    let filter = /[a-zA-Z]+(?![^(]*\))/g
    let filteredString = name.match(filter).join(" ").toLowerCase();
    let replacements = /\b(cup |cups |teaspoon |teaspoons |tablespoon |tablespoons |quart |quarts |pint |pints |dash |pinch |pinches |pound |pounds |tbsp |tsp |fluid oz. |fluid oz |fluid ounce |fluid ounces |kilogram |kilograms |gram |grams |ml |mls |gallon |gallons |gal. |liter |liters |stick |sticks |head )\b/gi
    let prepositions = /\b( a | the | an | to | of | for )\b/gi
    return filteredString.replace(replacements,"").replace(prepositions," ");            
  }

  const filteredIngredient = filteredName(props.ingredient.text)

  return (  
    <div>
      <li>{props.ingredient.text}{props.ingredient.weight}</li>
    </div>
  )
}


export default Ingredient 