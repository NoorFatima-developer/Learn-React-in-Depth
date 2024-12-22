import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (

    // 03 Way... Consumer...
    <UserContextProvider>
      <h1>Context API</h1>
      {/* Meny Login component sy data provide kea hai profile component mai */}
      {/* Tu mjy kbi b dubara dekhna ho tu m Login sy Profile kesa gya on components k code ko dekh skti o */}
      {/* Lkin oss sy pehly basic 3 kam must hai, dtaa create, provide and and pass in app.jsx and fer jahan sy jahan bejna on files k andr code kro or isk andr wrap krdo */}
      <Login/>
      <Profile/>
    </UserContextProvider>

  )
}

export default App
