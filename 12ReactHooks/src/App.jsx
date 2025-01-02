import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// 01...UseState => Update UI...


// 02... Jb b hamara component render hota hai tb hi hamara useEffect run hota hai...
// API sy data fetch krna ho tb b hum useEffect ka use krty hain...


//03... useRef => Dom manipulate... reference dety hain hum ismai..
// jesy meny clipboard sy koi chez copy krni o kisi chez ko highlight krna o k itni chez zopy krni hai, ya phr focus dena hai tb hum zda tr useRef ka refrence dety hain and hum isko use krty hain...
function App() {
  // const refElement = useRef("");
  const [name, setName] = useState("Noor")

  function Reset(){
    setName("")
  }

  return (
    <>
     <h1>Learning UseRef</h1>
     <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
     <button onClick={Reset}>Reset</button>
    </>
  )
}

export default App

