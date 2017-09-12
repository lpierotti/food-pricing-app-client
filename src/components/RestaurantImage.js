import React from 'react'
import RestaurantAdapter from '../adapters/restaurantAdapter'

class RestaurantImage extends React.Component {
  constructor() {
    super()
    this.state ={
      image: {}
    }
  }

  componentWillMount = () => {
    this.getImage();å
  }

  getImage = (venue_id) => {
    const adapter = new RestaurantAdapter()
    adapter.getImage(venue_id).then(json => this.setState({image: json}))
  }


  render() {
    return (
      <img src={this.state.image}/>
    )
  }
}


export default RestaurantImage