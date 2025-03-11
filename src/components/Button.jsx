import React, { memo } from 'react'

const Button = ({clickHandler}) => {
  return (
    <div>
      <button onClick={clickHandler}>Increase by 1</button>
    </div>
  )
}

export default memo(Button)
