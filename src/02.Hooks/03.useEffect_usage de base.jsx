import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  //? useEffect()第1个参数是函数，在其里面写副作用，会在组件渲染完成后执行
  useEffect(() => {
    //! 这里写副作用
    document.title = `you clicked ${count} times`

    const timer = setInterval(() => {
      console.log('Hi, React')
    }, 1000)
    
    //! 在useEffect中，可以返回一个函数，该函数我们称之为清理函数，一般就是做一些清理操作
    //! 清理函数会在下一次渲染之后，但是在执行副作用操作之前执行
    return () => {
      clearInterval(timer)
    }
  })
  
  const clickHandle = () => {
    setCount(count + 1)
  }

  return (
    <div> 
      <div> you clicked { count } times</div>
      <button onClick={ clickHandle}>+1</button>
    </div>
  )
}

/*
  常见的副作用有:
    - 发送网络请求
    - 添加一些监听的注册和取消注册
    - 手动修改 DOM

  以前我们是将这些副作用写在类组件的生命周期钩子函数里面，现在就可以书写在函数组件的 useEffect 这个 Hook 里面

*/

export default App
