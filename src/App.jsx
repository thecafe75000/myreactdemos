import { useState } from 'react'

function App() {
  
  const [value, setValue] = useState('')

  function changeHandle(e) {
    setValue(e.target.value)
  }

  function clickHandle() {
   console.log('value is ', value)
  }

  return (
    <div>  
      <input type="text" value={value} onChange={ changeHandle } />
      <button onClick={clickHandle}>Confirm</button>
    </div>
  )
}

export default App
