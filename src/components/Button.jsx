import React from 'react'

const Button = ({clickHandler}) => {
  return (
    <div>
      <button onClick={clickHandler}>Increase by 1</button>
    </div>
  )
}

export default Button
