import React from 'react'
import RecipeAdapter from '../adapters/recipeAdapter'
import Recipe from './Recipe'

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
	    <div>
	      <h1 onClick={this.searchItem}>{this.props.data.name}</h1>
	      <h3>{this.props.data.description}</h3>
	      <h3>{this.props.data.price}</h3>
	      {this.state.clicked ? <Recipe data={this.state.recipe}/> : null}	    	
	    </div>
	  )
  }
}

export default Item 