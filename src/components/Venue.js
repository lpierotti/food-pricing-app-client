import React from 'react'

const Venue = (props) => {
  console.log(props.data)
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h2>{props.data.location.address}</h2>
      <h3>{props.data.url}</h3>
    </div>
  )
}

export default Venue 