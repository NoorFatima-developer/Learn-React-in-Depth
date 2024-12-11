import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15;
  const addValue = () => {
    counter++;
    console.log("Value is added", Math.random());
    
  }
  
    return (
      <>
        <h1>Chai aur Code</h1>
        <h2>Counter Value: {counter}</h2>

        <button onClick={addValue}>Add Value</button>
        <br />
        <button>Remove Value</button>
      </>
    )
    
}

export default App
