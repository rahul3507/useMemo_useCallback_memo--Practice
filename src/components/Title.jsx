import React, { memo } from 'react'

const Title = ({counter}) => {
  return (
    <div>
      <p>Value of the counter is:: {counter}</p>
    </div>
  )
}

export default memo(Title)
