import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log(props.sushis.img_url)
  return (
    <div className="sushi" >
      <div className="plate" 
            onClick={() => props.eat(props.sushis)}>
        { 
          props.taken?
          null
          :
          <img src={props.sushis.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushis.name} - ${props.sushis.price}
      </h4>
    </div>
  )
}

export default Sushi