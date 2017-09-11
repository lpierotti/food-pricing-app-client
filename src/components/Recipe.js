import React from 'react'
import Ingredient from './Ingredient'
import IngredientsAdapter from '../adapters/ingredientsAdapter'

class Recipe extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      ingredients: [],
      matchingIngredients: []
    }
  }

  filteredName = (name) => {
    let filter = /[a-zA-Z]+(?![^(]*\))/g
    let filteredString = name.match(filter).join(" ").toLowerCase();
    let replacements = /\b(cup |cups |teaspoon |teaspoons |tablespoon |tablespoons |quart |quarts |pint |pints |dash |pinch |pinches |pound |pounds |tbsp |tsp |fluid oz. |fluid oz |fluid ounce |fluid ounces |ounce |ounces |kilogram |kilograms |gram |grams |ml |mls |gallon |gallons |gal. |liter |liters |stick |sticks |head |peeled | peeled |large |bunches |cloves |sliced |piece |cm |inch |coarsely |torn |)\b/gi
    let prepositions = /\b( a | the | an | to | of | in | for )\b/gi
    return filteredString.replace(replacements,"").replace(prepositions," ");            
  }

  setIngredients = () => {
    console.log(this.props.data.ingredients)
    let ingredients = []
    for (let i = 0; i < this.props.data.ingredients.length; i++){
      ingredients.push(this.filteredName(this.props.data.ingredients[i].text))
    }
    return ingredients;
  }

  componentDidMount() {
    console.log(this.props)
    this.getIngredients(this.setIngredients());
  }


  getIngredients = (ingredients) => {
    const adapter = new IngredientsAdapter()
    adapter.getIngredientsCost(ingredients).then(json => console.log(json))
  }

  render() {
    return (
      <div>
        <h1>{this.props.data.name}</h1>
        <h3>{this.props.data.yield}</h3>
        <h3>{this.props.data.ingredients ? this.props.data.ingredients.map(ingredient => <li><Ingredient ingredient={ingredient}/></li>) : null}</h3>
        <p> Recipe Cost: $1</p>
      </div>
    )
  }

}


export default Recipe 