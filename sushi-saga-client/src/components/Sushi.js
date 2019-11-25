import React, { Fragment } from 'react'
const Sushi = (props) => {
  console.log(props.info)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.plateClickHandler(props.info)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          true ?
            null
          :
            <img src={props.info.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.info.name} - ${props.info.price}
      </h4>
    </div>
  )
}
export default Sushi











