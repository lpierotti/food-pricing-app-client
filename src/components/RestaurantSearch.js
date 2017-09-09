import React from 'react'
import RestaurantAdapter from '../adapters/restaurantAdapter'
import Restaurants from './Restaurants'

class RestaurantSearch extends React.Component {
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
		event.preventDefault()
		const adapter = new RestaurantAdapter()
		adapter.getRestaurants(this.state.searchTerm).then(json => this.setState({response: json})
		)
	}

	showMenu = (venue_id) => {
		const adapter = new RestaurantAdapter()
		adapter.getMenu(venue_id).then(json => this.setState({response: json}))
	}


	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
					<input type="submit" />
				</form>
				<Restaurants data={this.state.response} showMenu={this.showMenu}/>
			</div>

		)
	}
}


export default RestaurantSearch