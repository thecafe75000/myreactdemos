import { useState } from 'react'
import useMyBook from './useMybook'

function App() {
  const { bookName, setBookName } = useMyBook()
  const [value, setValue] = useState('')

  function changeHandle(e) {
    setValue(e.target.value)
  }

  function clickHandle() {
    setBookName(value)
  }

  return (
    <div>
      <div>{bookName}</div>
      <input type='text' value={value} onChange={changeHandle} />
      <button onClick={clickHandle}>Confirm</button>
    </div>
  )
}

export default App
