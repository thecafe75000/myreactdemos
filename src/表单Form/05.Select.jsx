import { useState } from 'react'

function App() {
  //? Select 下拉列表
  const [selectValue, setSelectvalue] = useState("html")

  const handleChange = (e) => {
    setSelectvalue(e.target.value)
  }

  const clickHandle = () => {
    console.log('Select提交的内容是: ', selectValue)
  }

  return (
    <div>
      <select value={selectValue} onChange={handleChange}>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JS</option>
        <option value="react">REACT</option>
        <option value="vue">VUE</option>
      </select>
      <button onClick={clickHandle}>提交表单</button>
    </div>
  )
}

export default App
