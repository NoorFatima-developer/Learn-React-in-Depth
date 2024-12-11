import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15;
  const addValue = () => {
    console.log(addValue);
    
    counter++;
  }
  
    return (
      <>
        <h1>Chai aur Code</h1>
        <h2>Counter Value: {counter}</h2>

        <button>Add Value</button>
        <br />
        <button>Remove Value</button>
      </>
    )
    
}

export default App
