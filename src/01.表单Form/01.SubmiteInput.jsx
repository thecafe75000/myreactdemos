import { useState } from 'react'

function App() {
  const [inputValue, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  
  const clickHandle = () => {
    console.log('表单提交的内容是: ', inputValue)
    setValue('')
  }

  return (
    <div> 
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={clickHandle}>提交表单</button>
    </div>
  )
}

export default App;
