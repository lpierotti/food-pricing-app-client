import React from 'react'
import RestaurantAdapter from '../adapters/restaurantAdapter'
import Item from './Item'
import Recipe from './Recipe'

class Menu extends React.Component {

  constructor() {
    super()
    this.state ={
      menu: [],
      recipe: ""
    }
  }

  componentWillMount = () => {
    const adapter = new RestaurantAdapter()
    adapter.getMenu(this.props.venueId.match.params.id).then(json => this.setState({menu: json}))
  }

  getRecipe = (event) => {
    event.preventDefault()
    const adapter = new RestaurantAdapter()
    adapter.getRestaurants(this.state.searchTerm).then(json => this.setState({recipe: json})
    )
  }

  handleClick = (menuItem) => {
    console.log(this)
  }

  ///we could split the types into another page if we want
  render() {
    console.log(this.state.menu.menu)
    return (
      <div>
        {this.state.menu.menu ? this.state.menu.menu.map(type => <div key={type.name}><h3>{type.name}</h3><p>{type.description}</p>{type.entries.items.map(item => <div key={item.name}><li><Item data={item} description={item} price={item} handleClick={this.handleClick}/></li></div>)}</div>) : null}
      </div>
    )
  }
}

export default Menu 