import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
      {
          props.sushis.map(currentSushi => <Sushi
            eaten={props.eaten}
            removeSushi={props.removeSushi}
            sushi={currentSushi}/>)
        }
        <MoreButton incrementCounter={props.incrementCounter}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer