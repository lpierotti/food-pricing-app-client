import React from 'react'

const Ingredient = (props) => {

  function filteredName(name) {
    let filter = /[a-zA-Z]+(?![^(]*\))/g
    let filteredString = name.match(filter).join(" ").toLowerCase();
    let replacements = /\b(cup|cups|teaspoon|teaspoons|tablespoon|tablespoons|quart|quarts|pint|pints|dash|dashes|pinch|pinches|pound|pounds|tbsp|tsp|fluid oz.|fluid oz|fluid ounce|fluid ounces|ounce|ounces|kilogram|kilograms|gram|grams|ml|mls|gallon|gallons|gal.|oz|g|liter|liters|stick|sticks|head|peeled|cooked|large|bunches|cloves|sliced|piece|cm|inch|inches|coarsely|torn|halved|lengthwise|finely|minced|torn|lb|taste|sliced|melted|removed|a|the|an|and|to|of|in|or|for|lightly|beaten|about|&|cut|discarded|into|pieces|part|parts|freshly|squeezed|seeded|de-seeded|matchsticks|chopped|diced|chilled)\b/gi
    return filteredString.replace(replacements,"");            
  }

  const filteredIngredient = filteredName(props.ingredient.text)

  return (  
    <div>
      <p>{props.ingredient.text}</p>
      <p>{filteredIngredient}</p>
    </div>
  )
}


export default Ingredient 