import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name : "zain",
    age : 22 
  }
  let newArr = [1,2,3]
  return (
    <>
     <h1 className='bg-green-400 rounded-xl text-black mb-4'>Tailwind CSS</h1>
     <Card username="zain" btntext="click me"/>
     <Card username="ali" btntext="view me"/>
    </>
  )
}

export default App
