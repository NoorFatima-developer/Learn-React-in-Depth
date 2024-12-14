import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // ye essy kam ni kr rye ga, ye state sy kam kryga...
  // let counter = 15;

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // Counter++ sy console m tu updation hori hai, lkin UI update nahi horha... So, UI ko update krny klye we use react hooks:
    // So, we can say k UI updation ko React control krta hai...

    // console.log("Value is added", Math.random());
    // counter++;

    //print 15 ku k meny counter ki value bdmai update ki h
    //  console.log("Clicked: " , counter);

    // One more thing ye h k aghr m setCounter k andr prevCounter na likhti or essy counter++ krti tu ye update na kerta...
    // wo in sb counters as a batch leta..wo dekhta k sbk andr same e kam hora hai tu wo isko single hi smjta...
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // Islye k aghr mery pss koi esi condition aa e gi h jismai mjhy different  kam krwany hain tu osklye i will use setCounter as a callback like below:

    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1;
      const newCounter1 = newCounter + 1;
      const newCounter2 = newCounter1 + 1;
      const finalCounter = newCounter2 > 20 ? 20 : newCounter2;
      console.log("Clicked: ", finalCounter);
      return finalCounter;
    });
  };

  // TWO WAYS:(Same for above means add value)

  // Aghr tu m return krwana chahti o tu phr m as a callback logi setCounter ko..
  // and aghr mai return ni krwana chahti o tu phr m 2nd method use kr skti o..
  // And simply aghr condition nahi lgwani tu phr mai aram sy setCounter(counter - 1)krdogi...

  // 1--------------
  // function removeValue() {
  //   setCounter(prevCounter =>{
  //   const newCounter = prevCounter - 1;
  //   const finalCounter =  newCounter < 0 ? 0 : newCounter;
  //   console.log("Clicked: " , finalCounter);
  //   return finalCounter;
  // })
  // }

  // 2--------------
  function removeValue() {
    const newCounter = counter - 1;
    const finalCounter = setCounter(newCounter < 0 ? 0 : newCounter);
    console.log("Clicked: ", finalCounter);
    return finalCounter;

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
  );
}

export default App;
