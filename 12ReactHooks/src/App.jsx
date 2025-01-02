import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState(0)

  return (
    <>
     <h1>Learning UseRef</h1>
     <input type='text' value={name}></input>
    </>
  )
}

export default App

