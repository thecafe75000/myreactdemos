import { useState } from 'react'
import { addListAction } from '../redux/actions'

function Input(props) {
  const [value, setValue] = useState('')
  
  const changeHandle = (e) => {
    setValue(e.target.value)
    // console.log(value)
  }

  const clickHandle = () => {
    //? 将用户填写的内容提交到 store
    //? store 上有 diapatch() 方法, 该方法会派发一个 action 对象到 reducer里
    //? 这个 action 就是我们在 redux 定义好的，直接引入使用即可
    //? addListAction(value)执行后会返回一个 action 描述对象 => {type: ADD, data:用户填写的value}，该action对象会被 dispatch 到 reducer里
    props.store.dispatch(addListAction(value))
    setValue("")
  }

  return (
    <div className='form-inline'>
      <input
        type='text'
        className='form-control'
        placeholder='put your todo here'
        style={{ marginRight: 2 }}
        value={value}
        onChange={changeHandle}
      />
      <button className='btn btn-primary' onClick={clickHandle}>submit</button>
    </div>
  )
}

export default Input
