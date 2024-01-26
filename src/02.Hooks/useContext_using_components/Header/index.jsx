import React, { useContext } from 'react'
import { AppContext } from '../../../App'

const Header = () => {
  const { count } = useContext(AppContext)
  return (
    <div>
      <h3>Header childComponent</h3>
      <div>count's value: { count }</div>
    </div>
  )
}

export default Header