import React from 'react'
import UserAdapter from '../adapters/userAdapter'
import RecipeAdapter from '../adapters/recipeAdapter'
import Recipe from './Recipe'

class UserRecipesContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			recipes: []
		}
	}

	// searchItem = () => {  	
	// 	const adapter = new RecipeAdapter()
	// 	adapter.getRecipe(this.props.data.name).then(json => this.setState({clicked: true, recipe: json}))
 //  }

	componentDidMount() {
		const adapter = new UserAdapter()
		adapter.getUserRecipes().then(json => this.setState({recipes: json}))
	}
	
	render() {
		console.log(this.state.recipes)
		return (
			<div>
				{this.state.recipes.map(recipe => <Recipe data={recipe}/>)}
			</div>
		)
	}
}

export default UserRecipesContainer