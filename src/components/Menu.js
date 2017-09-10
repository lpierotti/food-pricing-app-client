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
        {this.state.menu.menu ? this.state.menu.menu.map(type => <div><h3>{type.name}</h3><p>{type.description}</p>{type.entries.items.map(item => <div><li>{item.name} {item.description} {item.price}</li></div>)}</div>) : null}
      </div>
    )
  }
}

export default Menu 