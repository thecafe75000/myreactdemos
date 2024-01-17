//? 生产 action 对象的函数，我们一般称之为 actionCreator
//? action 是一个描述对象，只是描述了数据如何进行更改，但是注意 action 对象本身不更改数据
//? 描述对象 action 会被派发给 reducer，在 reducer 里更改数据

import { ADD, DEL, CHANGE} from './actionType' // 引入action的类型

//? actionCreator
export const addListAction = newItem => ({
  type: ADD,
  data: newItem
})

export const delListAction = index => ({
  type: DEL,
  data: index
})

export const changeAction = index => ({
  type: CHANGE,
  data: index
})