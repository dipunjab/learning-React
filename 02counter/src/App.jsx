import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = ()=>{
    // console.log("value added", counter);
    counter = counter + 1
    setCounter(counter)
  }
  const removeValue = ()=>{
    // console.log("value added", counter);
    counter = counter - 1
    setCounter(counter)
  }

  return (
    <>
    <h1>React Project</h1>
    <h3>Counter Value: {counter}</h3>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
