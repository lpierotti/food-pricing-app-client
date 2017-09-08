import React from 'react'
import RecipeAdapter from '../adapters/recipeAdapter'

class RecipeSearch extends React.Component {
	constructor() {
		super()
		this.state ={
			searchTerm: "",
			response: {}
		}
	}

	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value 
		})
	}

	handleSubmit = (event) => {
		debugger
		event.preventDefault()
		const adapter = new RecipeAdapter()
		console.log(this.state.searchTerm)
		adapter.getRecipe(this.state.searchTerm).then(json => this.setState({response: json}))
	}


	render() {
		console.log(this.state.response)
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
					<input type="submit" />
				</form>
			</div>

		)
	}
}


export default RecipeSearch