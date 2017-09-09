export default class RestaurantAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/api/v1/restaurants'		
	}

	getRestaurants(restaurant) {
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

	getVenue(venue) {
		const venueSearchParams = {
			method: 'post',
			headers: {
				'Content-Type':'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({venue: {searchTerm: venue}})
		}
		
		return fetch(this.baseUrl, venueSearchParams)
			.then(resp => resp.json())
	}
}