import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
          props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} />)
        }
        <MoreButton grabFourSushis={props.grabFourSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer