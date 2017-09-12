import React from 'react'
import {Link} from 'react-router-dom'

const Restaurant = (props) => {

  // compenentDidMount() {
  //   props.showMenu();
  // }

  return (
    <div className="restaurant">
      <Link to={`/menus/${props.data.id}`}>
        <h1>{props.data.name}</h1>
        <h2>{props.data.location.address}</h2>
        <h3>{props.data.url}</h3>
      </Link>
    </div>
  )
}

export default Restaurant 