import { useState } from 'react'

function App() {
  const [textValue, setTextvalue] = useState('')

  //? 文本框textarea
  const handleChange = (e) => {
    setTextvalue(e.target.value)
  }

  const clickHandle = () => {
    console.log('文本框提交的内容是: ', textValue)
    setTextvalue('')
  }

  return (
    <div>
      <textarea
        cols="30"
        rows="10"
        value={textValue}
        onChange={handleChange}
      />
      <button onClick={clickHandle}>提交表单</button>
    </div>
  )
}

export default App
