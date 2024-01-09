import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const clickHandle = (number) => {
    setCount(count + number)
  }
 
  return (
    <div> 
      <div>{ count }</div>
      <button onClick={() => clickHandle(1)}>+1</button>
      <button onClick={() => clickHandle(-1)}>-1</button>
    </div>
  )
}

export default App
