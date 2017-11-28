import React from 'react'
import UserAdapter from '../adapters/userAdapter'
import UserRecipe from './UserRecipe'
import {Segment, Divider} from 'semantic-ui-react'

class UserRecipesContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			recipes: []
		}
	}


	componentDidMount() {
		const adapter = new UserAdapter()
		adapter.getUserRecipes().then(json => this.setState({recipes: json}))
	}
	
	render() {
		console.log(this.state.recipes)
		return (
			<div>
				{this.state.recipes.recipes ? this.state.recipes.recipes.map(recipe => <Segment padded><UserRecipe data={recipe} /><Divider horizontal/></Segment>) : null}

			</div>
		)
	}
}

export default UserRecipesContainer