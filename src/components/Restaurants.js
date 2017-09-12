import React from 'react'
import Restaurant from './Restaurant'

const Restaurants = (props) => {


  return (
    <div className="restaurants">
      <h3>{props.data.venues ? props.data.venues.map(venue => <Restaurant data={venue} showMenu={props.showMenu}/>) : null}</h3>
    </div>
  )
}

export default Restaurants 

// AIzaSyDbqqFPUk92stc_lcerI3-GKqULWBcDiDA
