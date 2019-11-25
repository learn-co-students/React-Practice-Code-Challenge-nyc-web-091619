import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(props.info)}>
        { 
          props.eaten.includes(props.info) ?
            null
          :
            <img src={props.info.img_url} width="100%" alt="sushi"/>
        }
      </div>
      <h4 className="sushi-details">
        {props.info.name} - ${props.info.price}
      </h4>
    </div>
  )
}

export default Sushi