import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushis = () => {
    return props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatenHandler={props.eatenHandler}/>)
  }

  return (
    
    <Fragment>
      <div className="belt">
        {
          renderSushis()
        }
        <MoreButton getFourSushis={props.getFourSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer