import { useState } from 'react'

// 自定义的Hook useMyBook
function useMyBook() {
  const [bookName, setBookName] = useState('React learning')
  return {
    bookName,
    setBookName
  }
}

export default useMyBook

/*
  除了使用官方内置的 Hook，我们还可以自定义 Hook，自定义 Hook 的本质其实就是函数，
  但是和普通函数还是有一些区别，主要体现在以下2个点：
    - 自定义 Hook 能够调用诸如 useState、useRef等，普通函数则不能
      自定义 Hook 由此可以通过内置的 Hooks 获得 Fiber 的访问方式，可以实现在组件级别存储数据的方案等
  
      自定义Hook和普通函数之间最大的区别就在于：函数有没有使用react内置的hook，
      如果使用了内置的hook，那么就是自定义hook，如果没有使用内置的hook，那么就是普通函数，
      普通函数不能调用React的Hook，因为Hook只能在React函数组件或自定义Hook中使用
  
    - 自定义 Hooks 需要以 use 开头，普通函数则没有这个限制。使用 use 开头并不是一个语法或者一个强制性的方案，更像是一个约定
  
当有业务的拆分时，常用到自定义Hook，把业务拆分成一个个小的函数，而这些小的函数又需要状态的共享等情况，会使用到React内置的Hook useState, useRef等

*/