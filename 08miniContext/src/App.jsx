import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (

    // 03 Way... Consumer...
    <UserContextProvider>
      <h1>Context API</h1>
    </UserContextProvider>
  )
}

export default App
