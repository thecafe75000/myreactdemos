import { useState } from 'react'

function App() {
  
  const [value, setValue] = useState('')

  function changeHandle(e) {
    setValue(e.target.value)
  }

  function clickHandle() {
   
  }

  return (
    <div>
      
      <button onClick={clickHandle}>确定</button>
    </div>
  )
}

export default App
