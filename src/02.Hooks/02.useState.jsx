import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{ text: 'coding' }])
  const [index, setIndex] = useState(0)
   
  const arrTodos = [
    { text: 'singing' },
    { text: 'shopping' },
    { text: 'reading' },
    { text: 'writing' }
  ]
 
  const updateTodos = (currentIndex) => {
    let validIndex = 0
    const newArr = [...arrTodos]
    newArr.unshift(todos[0])

    setTodos(newArr)
    if (currentIndex < 4) {
       validIndex = currentIndex + 1
    } else {
       validIndex = 0
    } 
    setIndex(validIndex)
  }

  return (
    <div> 
      <div>I am: {todos[index].text}</div>
      <button onClick={ ()=>updateTodos(index) }>click here</button>
    </div>
  )
}

export default App
