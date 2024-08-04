import React from 'react'
import './App.css'
import UsercontextProvider from './context/usercontextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {
  return (
    <UsercontextProvider>
      <h1>React With Chai</h1>
      <Login />
      <Profile />
    </UsercontextProvider>
  )
}

export default App
