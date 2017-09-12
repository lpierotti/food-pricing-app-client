import React from 'react'
import Ingredient from './Ingredient'
import IngredientsAdapter from '../adapters/ingredientsAdapter'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

class Recipe extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      ingredients: []
    }
  }

  filteredName = (name) => {
    let filter = /[a-zA-Z]+(?![^(]*\))/g
    let filteredString = name.match(filter).join(" ").toLowerCase();
    let replacements = /\b(cup|cups|teaspoon|teaspoons|tablespoon|tablespoons|quart|quarts|pint|pints|dash|dashes|pinch|pinches|pound|pounds|tbsp|tsp|fluid oz.|fluid oz|fluid ounce|fluid ounces|ounce|ounces|kilogram|kilograms|gram|grams|ml|mls|gallon|gallons|gal.|liter|liters|stick|sticks|head|peeled|cooked|large|bunches|cloves|sliced|piece|cm|inch|inches|coarsely|torn|halved|lengthwise|finely|minced|torn|lb|taste|sliced|melted|a|the|an|and|to|of|in|or|for|about)\b/gi
    return filteredString.replace(replacements,"");            
  }

  setIngredients = () => {
    let ingredients = []
    if (this.props.data.ingredients) {
      for (let i = 0; i < this.props.data.ingredients.length; i++){
        ingredients.push({name:this.filteredName(this.props.data.ingredients[i].text), amount:this.props.data.ingredients[i].weight})
      }
    }
    return ingredients;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props)
    if (prevProps === this.props) {
    	return
    } else {
    	this.getIngredients(this.setIngredients());
    }
    
  }


  getIngredients = (ingredients) => {
    const adapter = new IngredientsAdapter()
    adapter.getIngredientsCost(ingredients).then(json => this.setState({ingredients: json}, console.log(this.state.ingredients)))
  }

  getPrice = () => {
    let price = 0
    if (this.state.ingredients.ingredients) {
      this.state.ingredients.ingredients.forEach(function(ingredient){
      price += ingredient.price
     })
    return price
    }
    return 0;
  }

  render() {
    const price = this.getPrice();
    console.log(this.props)
    console.log(this.state)
    return (
    	<Modal trigger={<Button onClick={this.props.searchItem}>Get Recipe</Button>}>
		    <Modal.Header>{this.props.data.name}</Modal.Header>
		    <Modal.Content image scrolling>
		      <Image
		        size='medium'
		        src={this.props.data.image}
		        wrapped
		      />

		      <Modal.Description>
		        <Header>Serves {this.props.data.yield} people</Header>
		        <p>Try this as an alternative!</p>
		        {this.props.data.ingredients ? this.props.data.ingredients.map(ingredient => <li><Ingredient ingredient={ingredient}/></li>) : null}
		      	<p> Recipe Cost: ${price}</p>
		      </Modal.Description>
		    </Modal.Content>
		    <Modal.Actions>
		      <Button primary>
		        Proceed <Icon name='right chevron' />
		      </Button>
		    </Modal.Actions>
	    </Modal>
    )
  }

}


export default Recipe 