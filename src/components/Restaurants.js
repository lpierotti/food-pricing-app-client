import React from 'react'
import Venue from './Venue'

const Restaurants = (props) => {
  console.log('hello')
  console.log(props)
  return (
    <div>
      <h3>{props.data.venues ? props.data.venues.map(venue => <Venue data={venue}/>) : null}</h3>
    </div>
  )
}

export default Restaurants 

// list restaurants, then you can click a restaurant, and it will display the menu