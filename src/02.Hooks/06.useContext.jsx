import React, { createContext, useContext, useState } from 'react'

/**
 *  useContext(): 共享状态钩子，用来给后代组件共享数据
 *    - 首先在提供共享数据的组件中使用 createContext({}) 方法(该方法的参数是一个对象)，创建一个上下文对象
 *    - 上下文对象会提供 <上下文对象.Provider> 组件，这个组件的 value 属性的数据会共享给所有组件内部的后代组件
 *    - useContext() 用来引入某个祖辈组件共享的数据
 *    - useContext 的参数必须是 context 对象本身
 *        正确： useContext(AppContext)
          错误： useContext(AppContext.Consumer)
          错误： useContext(AppContext.Provider)
 */

//? 创建 context 上下文对象 AppContext
const AppContext = createContext({})

//? 子组件
function Header() {
  //? 使用 useContext 来获取父组件App的共享数据
  //? useContext()的参数就是数据所在的父组件或祖辈组件的上下文对象
  const { count } = useContext(AppContext)

  return (
    <div>
      <h2>Header</h2>
      <div>count: {count}</div>
    </div>
  )
}

//? 子组件
function Footer() {
  const { name } = useContext(AppContext)

  return (
    <div>
      <h2>Footer</h2>
      <div>name: {name}</div>
    </div>
  )
}

//? 父组件
function App() {
  const [count] = useState(10)

  return (
    <div>
      <h1>App</h1>
      {/* <AppContext.Provider> 组件的 value 属性的数据会共享给组件 App 的所有后代组件 */}
      <AppContext.Provider value={{ count, name: 'Carine' }}>
        <Header />
        <Footer />
      </AppContext.Provider>
    </div>
  )
}

export default App
