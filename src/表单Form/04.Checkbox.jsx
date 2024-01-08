import { useState } from 'react'

function App() {
  //? 多选框checkbox 数据类型是数组
  const [checkBoxes, setCheckboxes] = useState([
    {content:"html", checked: false},
    {content:"css", checked: false},
    {content:"js", checked: false},
    {content:"react", checked: false},
    {content:"vue", checked: false}
  ])

  const handleChange = (index) => {
    const newArr = [...checkBoxes]
    newArr[index].checked = !newArr[index].checked
    setCheckboxes(newArr)
  }

  const clickHandle = () => {
    console.log('checkbox提交的内容是: ', checkBoxes)
    
    // 将所有checked的值恢复为false
    const resetCheckboxes = checkBoxes.map((item) => ({
      ...item,
      checked: false
    }))

    setCheckboxes(resetCheckboxes)
  }

  return (
    <div>
      <div>
        {checkBoxes.map((item, index) => (
          <div key={index}>
            <input
              type='checkbox'
              value={item.content}
              checked={item.checked}
              onChange={()=>handleChange(index)}
            />
            <span>{item.content}</span>
          </div>
        ))}
      </div>
      <button onClick={clickHandle}>提交表单</button>
    </div>
  )
}

export default App
