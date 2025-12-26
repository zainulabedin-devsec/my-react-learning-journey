import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todo from './components/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>redux toolkit</h1>
     <AddTodo/>
     <Todo/>
    </>
  )
}

export default App
