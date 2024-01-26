import React, { useContext } from 'react'
import { AppContext } from '../../../App'

function Footer() {
  const { setCount } = useContext(AppContext)
  
  const handleClick = () => {
    setCount(x=>x+1)
  }
  return (
    <div>
      <h3>Footer</h3>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default Footer