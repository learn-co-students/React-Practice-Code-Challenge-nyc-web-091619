import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi=>
        <Sushi 
          key={sushi.id} 
          sushis={sushi} 
          removePlate={props.removePlate}
          eat={props.eat}
          taken={props.eaten.includes(sushi)}/>
        )}
        <MoreButton getMore={props.getMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer