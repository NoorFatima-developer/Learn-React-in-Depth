import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-green-600 p-4'>React Router DOM</h1> */}
      <Home/>
      <About/>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
