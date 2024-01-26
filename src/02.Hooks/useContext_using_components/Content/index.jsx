import React, { useContext } from 'react'
import { AppContext } from '../../../App'

const Content = () => {
  const { count }= useContext(AppContext)
  return (
    <div>
      <h3>Content childComponent</h3>
      <div>count's value: { count}</div>
    </div> 
  )
}

export default Content