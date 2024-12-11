import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15;
  const addValue = () => {
    // Counter++ sy console m tu updation hori hai, lkin UI update nahi horha... So, UI ko update krny klye we use react hooks:
    // So, we can say k UI updation ko React control krta hai...
    counter++;
    // console.log("Value is added", Math.random());
    console.log("Clicked: " , counter);
    
  }
  
    return (
      <>
        <h1>Chai aur Code</h1>
        <h2>Counter Value: {counter}</h2>

        <button onClick={addValue}>Add Value {counter}</button>
        <br />
        <button>Remove Value {counter}</button>
      </>
    )
    
}

export default App
