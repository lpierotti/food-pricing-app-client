import React from 'react'

const Ingredient = (props) => {

  function filteredName(name) {
    let filter = /[a-zA-Z]+(?![^(]*\))/g
    let filteredString = name.match(filter).join(" ").toLowerCase();
    let replacements = /\b(cup |cups |teaspoon |teaspoons |tablespoon |tablespoons |quart |quarts |pint |pints |dash |pinch |pinches |pound |pounds |tbsp |tsp |fluid oz. |fluid oz |fluid ounce |fluid ounces |ounce |ounces |kilogram |kilograms |gram |grams |ml |mls |gallon |gallons |gal. |liter |liters |stick |sticks |head |peeled |peeled |cooked |large |bunches |cloves |sliced |piece |cm |inch |coarsely |torn |halved |lengthwise |finely |minced |torn| lb|taste |sliced |melted )\b/gi
    let prepositions = /\b( a | the | an | and | to | of | in | or | for | about )\b/gi
    return filteredString.replace(replacements,"").replace(prepositions," ");            
  }

  const filteredIngredient = filteredName(props.ingredient.text)

  return (  
    <div>
      <li>{props.ingredient.text}</li>
      <li>{filteredIngredient}</li>
    </div>
  )
}


export default Ingredient 