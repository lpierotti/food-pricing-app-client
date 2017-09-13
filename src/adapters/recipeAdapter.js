export default class RecipeAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/api/v1/recipes'		
	}

	getRecipe(recipe) {
		const recipeSearchParams = {
			method: 'post',
			headers: {
				'Content-Type':'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({recipe: {searchTerm: recipe}})
		}
		
		return fetch(this.baseUrl, recipeSearchParams)
			.then(resp => resp.json())
	}

	saveRecipe(recipe) {
		const recipeSaveParams = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({recipe: {recipeToSave: recipe}})
		}

		fetch(this.baseUrl, recipeSaveParams)

	}
}