import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    
  },[])

  return (
    <div>
      <h1>App: {count}</h1>
      <button onClick={()=>{setCount(x => x+1)}}>+1</button>
    </div>
  )
}

export default App
