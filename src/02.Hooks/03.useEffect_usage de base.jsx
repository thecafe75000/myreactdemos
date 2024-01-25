import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  /* useEffect()第1个参数是函数，在其里面写副作用，会在组件挂载渲染完成后执行，其主要工作类似类组件中的生命周期函数
     语法：useEffect(()=>{}, dependencyArray) => dependencyArray 是可选参数(是个数组), 包含了当前useEffect的依赖项
          
          如果没有参数dependencyArray, 那么只要组件发生更新, useEffect()就会被调用执行
          如果有参数dependencyArray，那可以存在一个或多个依赖项：
            1- 如果是空数组，表示依赖项为空，即没有依赖项，那么当前的 useEffect() 只会在初始化的时候执行一次
            2- 如果不是空数组，表示有依赖项，如果依赖项中有state数据，则除了初始化会执行一次以外，只有依赖项
               的数据更新以后，才会执行当前的useEffect()
   */
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
      <div> you clicked {count} times</div>
      <button onClick={clickHandle}>+1</button>
    </div>
  )
}

/*
  常见的副作用有:
    - 发送网络请求，获取数据(data fetching)
    - 事件监听或订阅(setting up a subscription)
    - 添加一些监听的注册和取消注册
    - 手动修改 DOM(changing the DOM )
    - 输出日志(logging)

  以前我们是将这些副作用写在类组件的生命周期钩子函数里面，现在就可以书写在函数组件的 useEffect 这个 Hook 里面

*/

export default App
