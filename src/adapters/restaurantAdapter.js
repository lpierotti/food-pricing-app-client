export default class RestaurantAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/restaurants'		
	}

	getRestaurant(restaurant) {
		const restaurantSearchParams = {
			method: 'post',
			headers: {
				'Content-Type':'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({restaurant: {searchTerm: restaurant}})
		}
		
		return fetch(this.baseUrl, restaurantSearchParams)
			.then(resp => resp.json())
	}
}