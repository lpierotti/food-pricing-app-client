import React from 'react'
import RestaurantAdapter from '../adapters/restaurantAdapter'

class Menu extends React.Component {

  constructor() {
    super()
    this.state ={
      menu: [{}]
    }
  }

  componentWillMount = () => {
    const adapter = new RestaurantAdapter()
    adapter.getMenu(this.props.venueId.match.params.id).then(json => this.setState({menu: json}))
  }

  render() {
    console.log(this.state.menu.menu)
    return (
      <div>
        <h3>{this.state.menu.menu ? this.state.menu.menu.map(type => <div><li>{type.name}</li><li>{type.description}</li>{type.entries.items.map(item => <div><li>{item.name}</li></div>)}</div>) : null}</h3>
      </div>
    )
  }
}

export default Menu 