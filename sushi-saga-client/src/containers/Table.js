import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money_left} remaining!
      </h1>
      <p onDoubleClick={props.getMoney} className="remaining" style={{marginTop: "200px",marginBottom: "100px"}}>Double click here to get +$100</p>
      <form  className="remaining" style={{marginTop: "230px"}} onSubmit={props.getMoneyForm}>
        <input type="text" placeholder="Add some money..."></input>
        <input type="submit" value="Get Money!"></input>
      </form>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table