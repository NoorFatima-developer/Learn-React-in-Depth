import { useState } from 'react'
import './App.css'

function App() {

  // Collect all variables jo jo hamy chahye...
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState('false');
  const [charAllowed, setCharAllowed] = useState('false');
  const [password, setPassword] = useState('');

  return (
    <>

      <h1 className='text-4xl text-center'>Test</h1>
    
    </> 
  )
}

export default App


