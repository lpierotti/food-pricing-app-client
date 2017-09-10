import React from 'react'
import Restaurant from './Restaurant'

const Restaurants = (props) => {
  return (
    <div>
      <h3>{props.data.venues ? props.data.venues.map(venue => <Restaurant data={venue} showMenu={props.showMenu}/>) : null}</h3>
    </div>
  )
}

export default Restaurants 

