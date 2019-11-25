import React, { Fragment } from 'react'

const Sushi = (props) => {


  return (
    <Fragment>
    <div className="sushi">
      <div className="plate" 
           onClick={e => props.eatenHandler(props.sushi)}>
        { 
          
          props.sushi.eaten === true 
          ?
            null
          :
            <img src={props.sushi.img_url} width="100%" alt="pic"/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
    </Fragment>
  )
}

export default Sushi