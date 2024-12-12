import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // ye essy kam ni kr rye ga, ye state sy kam kryga...
  // let counter = 15;

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // Counter++ sy console m tu updation hori hai, lkin UI update nahi horha... So, UI ko update krny klye we use react hooks:
    // So, we can say k UI updation ko React control krta hai...
  
    // console.log("Value is added", Math.random());
    // counter++;

    //print 15 ku k meny counter ki value bdmai update ki h
    //  console.log("Clicked: " , counter);
    setCounter(prevCounter => {
     const newCounter = prevCounter + 1;
     console.log("Clicked: " , newCounter);
     return newCounter > 20 ? 20 : newCounter;
  });
}
  
  // TWO WAYS:

  // Aghr tu m return krwana chahti o tu phr m as a callback logi setCounter ko..
  // and aghr mai return ni krwana chahti o tu phr m 2nd method use kr skti o..
  // 1--------------
  // function removeValue() {
  //   setCounter(prevCounter =>{
  //   const newCounter = prevCounter - 1;
  //   console.log("Clicked: " , newCounter);
  //   return newCounter < 0 ? 0 : newCounter;
  // })
  // }

  // 2--------------
  function removeValue(){
  const newCounter = counter - 1;
  console.log("Clicked: " , newCounter);
  setCounter(newCounter < 0? 0 : newCounter);
  // essy b condition add krskti o mai:
  // if(newCounter < 0){
  //   setCounter(0);
  // }
  }

    return (
      <>
        <h1>Chai aur Code</h1>
        <h2>Counter Value: {counter}</h2>

        <button onClick={addValue}>Add Value {counter}</button>
        <br />
        <button onClick={removeValue}>Remove Value {counter}</button>
      </>
    )
    
}

export default App
