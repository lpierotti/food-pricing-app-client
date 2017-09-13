import React from 'react'
import UserAdapter from '../adapters/userAdapter'

class UserRecipesContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			recipes: []
		}
	}

	componentDidMount() {
		adapter = new UserAdapter()
		adapter.getUserRecipes()
	}
	
	render() {
		return (
			<div>

			</div>
		)
	}
}

export default UserRecipesContainer