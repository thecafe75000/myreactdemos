//? store 文件，这里存储 state 数据

import { createStore } from 'redux'
import { todoReducer } from './reducers'

//? 创建 store, 需要给方法createStore()传入一个 reducer
//? reducer: 是一个纯函数，用于计算最新的状态
export const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 这行代码用于开发者工具观察Redux
)
