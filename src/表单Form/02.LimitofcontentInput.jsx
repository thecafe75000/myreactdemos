import { useState } from 'react'

function App() {
  const [inputValue1, setValue1] = useState('')
  const [inputValue2, setValue2] = useState('')

  //? 对用户输入的内容进行限制
  const handleChange = (e) => {
    const name = e.target.name
    switch (name) {
      case 'one': {
        setValue1(e.target.value.toUpperCase())
        break
      }
      case 'two': {
        const newValue = e.target.value.split('').map(item => {
          if (!isNaN(item)) {
            return item
          }
          //! 如果 item 不是数字，map函数没有明确返回任何值,会返回 undefined，会导致问题，尤其是在字符串拼接的情况下
          //! 为了避免潜在的问题，在 if 语句的外面添加一个 return ''，以确保映射函数始终返回一个值
          //! 这个值可以是空字符串或其他您认为合适的默认值，具体取决于需求。
          //! 这样可以防止在字符串拼接时出现 undefined，因为 join() 会将数组中的 undefined 转换为字符串 "undefined"
          return ''
        }).join('')
        setValue2(newValue)
        break
      }
      default: {
        console.log('input的属性name没有任何对应的匹配值')
      }
    }
  }

  const clickHandle = () => {
    console.log('表单1提交的内容是大写字母: ', inputValue1)
    console.log('表单2提交的内容是数字: ', inputValue2)
  }

  return (
    <div>
      <input
        type='text'
        name='one'
        value={inputValue1}
        onChange={handleChange}
        placeholder='自动转为大写'
      />
      <input
        type='text'
        name='two'
        value={inputValue2}
        onChange={handleChange}
        placeholder='只能输入数字'
      />
      <button onClick={clickHandle}>提交表单</button>
    </div>
  )
}

export default App
