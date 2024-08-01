import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  // const [multipliedvalue, setmultipliedvalue] = useState(1)
  let multipliedvalue = value * 5

  const multiplyByFive = ()=>{
    // setmultipliedvalue(value*5)
    setValue(value+1)
  }


  return (
    <>
    <h1>Main value: {value}</h1>
    <button onClick={multiplyByFive}>Click to Multiply by 5</button>
    <h2>Multiplied value: {multipliedvalue}</h2>
    </>
  )
}

export default App
