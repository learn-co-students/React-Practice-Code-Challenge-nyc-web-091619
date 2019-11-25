import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log(props.money, props.sushi.price)
  return (
    <div className="sushi">
      {props.money > props.sushi.price
      ?
      <div className="plate" 
           id={props.sushi.id}
           data-money={props.sushi.price}
           onClick={props.eatSushi}>
        { 
          props.eaten.includes(props.sushi.id) 
          ?
          null
          :
          <img src={props.sushi.img_url} width="100%" alt="sushi image"/>
        }
      </div>
      :
      <div className="plate" 
           id={props.sushi.id}
           data-money={props.sushi.price}
           onClick={()=>{alert("no money no mo")}}>
        { 
          props.eaten.includes(props.sushi.id) 
          ?
          null
          :
          <img src={props.sushi.img_url} width="100%" alt="sushi image"/>
        }
      </div>}
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi