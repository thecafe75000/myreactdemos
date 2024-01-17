import{ ADD, DEL, CHANGE } from './actionType'

let defaultState = {
  list:[
    {
      content: 'React learning',
      status: false
    },
    {
      content: 'Review Vue',
      status: false
    },
    {
      content: 'Playing a game',
      status: false
    },
    {
      content: 'Reading a book',
      status: false
    }
  ]
}

/**
 *  reducer 用于计算最新的状态, 它是一个纯函数
 *  通过 reducer 这个纯函数可以计算出最新的状态
 *  reducer() 接收2个参数: 
 *     - 第1个参数是 state，也就是 store 里的数据, 每次会传入上一次的 state 数据
 *     - 第2个参数是 action 描述对象, 形式为 {type:'ADD', data:'redux learning'}
 *                  描述对象描述了要做什么，以及带来的额外数据
 */

//? todoReducer 是一个 reducer 
//? reducer 根据描述对象 action 计算出 store 里新的 state 的数据
export function todoReducer(state = defaultState, action) {
  //? 有了描述对象 action 后，就可以根据旧的 state 计算出新的 state，并将新的 state 返回
  switch (action.type) {
    case ADD: {
      // 新增的操作
      // 不能直接修改state的数据，需要先拷贝一份数据
      const arr = [...state.list]
      arr.push({
        content: action.data,
        status: false
      })
      return {list: arr} 
    }
    case DEL: {
      // 删除的操作
      const arr = [...state.list]
      //? action.data 对应的就是 index (参看 action 描述对象 delListAction)
      arr.splice(action.data, 1)
      return { list: arr }
    }
    case CHANGE: {
      // 修改的操作, 修改的是数组 list 里元素属性 status, 取反即可
      const arr = [...state.list]
      //? action.data 对应的就是 index (参看 action 描述对象 changeAction)
      arr[action.data].status = !arr[action.data].status
      return { list: arr }
    }
    default: return state
  }
}