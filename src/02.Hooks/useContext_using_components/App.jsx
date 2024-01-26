import React, { createContext,  useState } from 'react'
import Header from './02.Hooks/useContext/Header'
import Content from './02.Hooks/useContext/Content'
import Footer from './02.Hooks/useContext/Footer'

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
export const AppContext = createContext({})

//? 父组件
const App = () => {
  const [count, setCount] = useState(10)

  return (
    <div>
      <h1>App</h1>
      {/* <AppContext.Provider> 组件的 value 属性的数据会共享给组件 App 的所有后代组件 */}
      <AppContext.Provider value={{ count, setCount }}>
        <Header />
        <hr/>
        <Content />
        <hr/>
        <Footer />
      </AppContext.Provider>
    </div>
  )
}
export default App
