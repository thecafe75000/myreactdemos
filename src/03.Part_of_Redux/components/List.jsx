import React from 'react'
import { delListAction, changeAction } from '../redux/actions'


function List(props) {

  const clickHandle = (index) => {
    //? delListAction(index)执行后会返回一个 action 描述对象,该action对象会被 dispatch 到 reducer里
    props.store.dispatch(delListAction(index))
  }

  const changeHandle = (index) => {
    //? changeAction(index)执行后会返回一个 action 描述对象,该action对象会被 dispatch 到 reducer里
    props.store.dispatch(changeAction(index))
  }

  //? 在 redux 中，通过 store.getState() 来获取 store 里 state 数据
  const lis = props.store.getState().list.map((item, index) => {
    return (
      <li key={index} className='text-primary'>
        <span
          onClick={() => changeHandle(index)}
          className = {['singleitem', item.status ? 'completed' : ''].join(' ')}
        >
          {item.content}
        </span>
        <button type='button' className='close' onClick={()=> clickHandle(index)}>
          &times;
        </button>
      </li>
    )
  })

    return (
      <div>
        <ul style={{ marginTop: 20 }}>
          {lis}
        </ul>
      </div>
    )
  }

export default List