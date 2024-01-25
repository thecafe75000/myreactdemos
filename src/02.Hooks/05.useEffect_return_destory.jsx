import React, { useEffect, useState } from 'react'

/**
 * 语法：useEffect(()=>{return destoryFn}, dependencyArray)
 *      
 *      useEffect()的回调函数本身可以返回一个函数，可称之为destoryFn:
 *        1- destoryFn 是在下一次执行useEffect()的回调函数时被调用执行
 *        2- destroyFn 的目的是为了清除上一次回调函数产生的副作用
 * 
 */
function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    console.log('update the count, you will do something')
    const timer = setInterval(() => {
      console.log('timer')
    }, 1000)

    //? useEffect() 的回调函数可以返回一个函数destoryFn,这个函数在下一次执行的时候，先调用上一次的回调函数
    //? 也就是当下的 clearInterval(timer) 清除的是上一次执行回调函数时产生的timer，
    //? 注意这次执行回调产生的timer只能在下一次执行回调时被清除
    return () => {
      clearInterval(timer)
    }
  },[count])

  return (
    <div>
      <h1>App: {count}</h1>
      <button onClick={()=>{setCount(x => x+1)}}>+1</button>
    </div>
  )
}

export default App

/**
 *  useEffect()的执行时机: 
 *    - 对于 useEffect 的执行，React 把它的回调函数放在了异步队列
 *    - 当主线程执行完毕，就会立马执行useEffect的回调函数
 *  
 *  具体就是useEffect()的执行时机有2种情况：
 *    1- 在组件挂载渲染完成后执行 (类似类组件的componentDidMount)
 *    2- 当组件更新以后就会触发执行 (类似类组件的componentDidUpdate)
 */
