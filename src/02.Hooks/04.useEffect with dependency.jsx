import { useEffect, useState } from 'react'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  //? useEffect()第1个参数是函数，在其里面写副作用，会在组件挂载渲染完成后执行
  //? 第2个参数是数组，作为useEffect()的依赖项数组，
  //? 如果数组是一个空数组，代表没有任何依赖，useEffect()里的副作用只执行一次，
  //? 通常是发送http请求时无需依赖, 代表数据已经更新了，无需再发送请求
  useEffect(() => {
    //! 这里写副作用
    console.log('执行副作用函数')
  }, [count1]) //! 表示useEffect只依赖count1, 即只有count1变化的时候，才会执行副作用，否则不会重新执行副作用

  return (
    <div>
      <div>count1:{count1}</div>
      <button onClick={() => setCount1(count1 + 1)}>+1</button>
      
      <div>count2:{count2}</div>
      <button onClick={() => setCount2(count2 + 1)}>+1</button>

      <div>count3:{count3}</div>
      <button onClick={() => setCount3(count3 + 1)}>+1</button>
    </div>
  )
}


export default App

/**
 * useEffect()的执行时机有2种情况：
 *  1- 在组件挂载渲染完成后执行 (类似类组件的componentDidMount)
 *  2- 当组件更新以后就会触发执行 (类似类组件的componentDidUpdate)
 * 
 */