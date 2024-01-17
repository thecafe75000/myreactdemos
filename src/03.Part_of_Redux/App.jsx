import Input from './03.Part_of_Redux/components/Input'
import List from './03.Part_of_Redux/components/List'
import './03.Part_of_Redux/css/App.css'


function App(props) {
  
  return (
    <div className='container'>
      <h1 className='lead' style={{ marginBottom: '30px' }}>
        Todo List
      </h1>
      <Input store={props.store} />
      <List store={props.store} />
    </div>
  )
}

export default App
