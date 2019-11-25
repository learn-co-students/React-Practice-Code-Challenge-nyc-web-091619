import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.grabFourSushis()}>
            More sushi!
          </button>
}

export default MoreButton