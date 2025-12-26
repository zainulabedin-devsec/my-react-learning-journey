import { useState } from 'react'
import './App.css'

function App() {
 
let [counter,setcounter]=useState(15)
//let counter = 15
const addValue = () => {
  if (counter>=20){
    alert('you have reached the limit');
  }
  else{
  setcounter(counter+1)
}

}
const removeValue = () => {
  if(counter <= 0){
    alert('you have reached the limit');
  }
  else{
  setcounter(counter-1)
  }
}

  return (
    <>
      <h1>chai or code</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
