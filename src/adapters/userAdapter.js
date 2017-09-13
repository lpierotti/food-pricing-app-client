export default class UserAdapter {

	constructor() {
	    this.baseUrl = 'http://localhost:3000/api/v1/user'   
	}

	getUserRecipes() {
	  	const params = {
	      method: 'GET',
	      headers: {
	        'Content-Type':'application/json',
	        'Accept': 'application/json'
	      }
	    }
	    
	    return fetch(`${this.baseUrl}/:id/recipes`, params)
	      .then(resp => resp.json())
	}
}