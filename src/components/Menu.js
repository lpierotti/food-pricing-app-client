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


  ///we could split the types into another page if we want
  render() {
    // console.log(this.state.menu.menu)
    return (
      <div>
        {this.state.menu.menu ? this.state.menu.menu.map((type,index) => <div key={index}><h3>{type.name}</h3><p>{type.description}</p>{type.entries.items.map((item,index) => <div key={index}><Item data={item} description={item} price={item}/></div>)}</div>) : null}
      </div>
    )
  }
}

export default Menu 