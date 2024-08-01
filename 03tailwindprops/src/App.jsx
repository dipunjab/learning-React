import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Usman",
    age: "21"
  }
  let newArr=[1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-3 mb-4">Tailwind test</h1>
      <Card username="code" btnText="clickme"/>
      <Card username="usman" />
    </>
  )
}

export default App
