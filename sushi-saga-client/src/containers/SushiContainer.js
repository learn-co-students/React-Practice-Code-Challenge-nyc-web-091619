import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const sushiArray = (props) => {
  let startIndex = props.sushiRun
  let endIndex = startIndex + 4
  let sushi = props.sushi.slice(startIndex, endIndex)
  let mappedSushi = sushi.map((fish) => {
    return fish
  })
  return mappedSushi

const sushiRenderFour = (props) => {
  return sushiArray(props).map((sushi, idx) => 
    <
      Sushi info={sushi} key={idx} plateClickHandler={props.plateClickHandler}
    />
  )
}

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
          {sushiRenderFour(props)}
        <MoreButton clickHandler={props.clickHandler}/>
      </div>
    </Fragment>
  )
}
export default SushiContainer