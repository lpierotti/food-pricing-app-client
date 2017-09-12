import React from 'react'
import RecipeAdapter from '../adapters/recipeAdapter'
import Recipe from './Recipe'
import { Card } from 'semantic-ui-react'

class Item extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		clicked: false,
  		recipe: {}
  	}
  }

  searchItem = () => {
  	if (this.state.clicked) {
  		this.setState({clicked: false, recipe:{}})
  	} else {
  		// this.setState({clicked: true})
  		const adapter = new RecipeAdapter()
  		adapter.getRecipe(this.props.data.name).then(json => this.setState({clicked: true, recipe: json}))
  	}

  }



  render() {
  	// console.log(this.state)
  	return (
	    <div className="ui link card" onClick={this.searchItem}>
	      <Card
		    link
		    header={this.props.data.name}
		    meta={this.props.data.price}
		    description={this.props.data.description}> 
		    
		  </Card>
	     <Recipe data={this.state.recipe}/>
	    </div>
	  )
  }
}

export default Item 