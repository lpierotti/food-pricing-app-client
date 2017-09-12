import React from 'react'

const Ingredient = (props) => {

  function filteredName(name) {
    let filter = /[a-zA-Z]+(?![^(]*\))/g
    let filteredString = name.match(filter).join(" ").toLowerCase();
    let replacements = /\b(cup|cups|teaspoon|teaspoons|tablespoon|tablespoons|quart|quarts|pint|pints|dash|dashes|pinch|pinches|pound|pounds|tbsp|tsp|fluid oz.|fluid oz|fluid ounce|fluid ounces|ounce|ounces|kilogram|kilograms|gram|grams|ml|mls|gallon|gallons|gal.|oz|g|liter|liters|stick|sticks|head|peeled|cooked|large|bunches|cloves|sliced|piece|cm|inch|inches|coarsely|torn|halved|lengthwise|finely|minced|torn|lb|taste|sliced|split|melted|removed|a|frozen|thawed|grated|the|an|and|to|of|in|or|for|lightly|crushed|beaten|about|&|cut|discarded|into|pieces|part|parts|freshly|squeezed|seeded|de-seeded|softened|sweetened|shredded|matchsticks|small|large|big|bunch|fresh|chopped|diced|chilled|pitted|flesh|scooped|out|then|roughly|peeled|halved|stemmed|with|without|skin|regular|or|grainy|variety|c|snipped|flaked|bag|log|soft|extra|divided|crumbled|thickly|well|plus|combined|boneless|skinless|horizontally|vertically|easy|chunky|preferably|one|two|three|four|five|six|seven|eight|nine|glass|thinly|canned|packed|light|sheets|ten|thick|s|tips|browned|drained|medium|only)\b/gi
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