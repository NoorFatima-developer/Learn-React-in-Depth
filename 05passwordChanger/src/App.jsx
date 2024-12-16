import { useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState();
  const [charAllowed, setCharAllowed] = useState();
  const [password, setPassword] = useState('');
  
  return (
    <>

      <h1 className='text-4xl text-center'>Test</h1>
    
    </>
  )
}

export default App
