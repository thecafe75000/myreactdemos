import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './03.Part_of_Redux/redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));

function render() {
  //? 让 store 作为根组件App的属性，这样其他的所有组件都可以通过 props 拿到store
  root.render(<App store={store} />)
}

//? 首次渲染页面需要先调用 render() 一次
render()

//? 需要把 redux 和 react 建立关联
//? 当 store 的 state 数据发送改变的时候会直接触发 store 上的方法 subscribe() 
//? subscribe() 接收的参数是一个函数，在参数函数里重新渲染页面，即每次 state 数据发生变化都重新渲染页面
store.subscribe(render)


