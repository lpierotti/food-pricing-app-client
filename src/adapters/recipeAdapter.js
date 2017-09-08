
export default class RecipeAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/recipes'		
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
		var recipeData ={};
		return fetch(this.baseUrl, recipeSearchParams)
			.then(resp => resp.json())
	}
}