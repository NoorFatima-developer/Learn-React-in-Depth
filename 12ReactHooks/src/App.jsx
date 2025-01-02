import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// 01...UseState => Update UI...


// 02... Jb b hamara component render hota hai tb hi hamara useEffect run hota hai...
// API sy data fetch krna ho tb b hum useEffect ka use krty hain...


//03... useRef => Dom manipulate... reference dety hain hum ismai..
// jesy meny clipboard sy koi chez copy krni o kisi chez ko highlight krna o k itni chez zopy krni hai, ya phr focus dena hai tb hum zda tr useRef ka refrence dety hain and hum isko use krty hain...
// function App() {
//   const refElement = useRef("");
//   const [name, setName] = useState("Noor")

//   function Reset(){
//     setName("");
//     refElement.current.focus();
//   }

//   function handleInput(){
//     refElement.current.focus();
//     refElement.current.style.color = "red"
//     refElement.current.value = "Noorah";
//   } 

//   return (
//     <>
//      <h1>Learning UseRef</h1>
//      <input type='text' value={name} onChange={(e) => setName(e.target.value)} ref={refElement}></input>
//      <button onClick={Reset}>Reset</button>
//      <button onClick={handleInput}>Handle Input</button>
//     </>
//   )
// }

// export default App


// 04--- UseMemo Hook => Increase Applucation Performance ...Reuse Function, it means jb hum kisi func ko 1 dfa use krty hain tu it stores that function in cache memory and jb hmy dubraa need hoti h tu hum
// log ossi function ko reuse krlety hain instead of k hum new function ko create krain...


function App() {

  const [Add, setAdd] = useState(0);
  const [Subtract, setSubtract] = useState(100);
  return(
    <>
      <div className='App'>
        <h1>Learning UseMemo</h1>
        <button onClick={() => setAdd(Add + 1)}>Increment</button>
        <span>{Add}</span>
        <br />
        <button onClick={() => setSubtract(Subtract - 1)}>Decrement</button>
        <span>{Subtract}</span>

      </div>
    </>
  )
}

export default App;