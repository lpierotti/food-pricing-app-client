import React from 'react'

const Item = (props) => {
  function searchItem() {

  }

  return (
    <div>
      <h1>{props.data.name}</h1>
      <h3>{props.data.description}</h3>
      <h3>{props.data.price}</h3>
    
    </div>
  )
}

export default Item 