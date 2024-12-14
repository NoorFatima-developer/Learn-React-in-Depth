import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const myObj = {
    name: 'Chai',
    age: 28,
    hobbies: ['Coding', 'Reading', 'Travelling']
  }

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
   <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>tailwindcss</h1>
   {/* Aghr mai direct object ya array pass krti tu wo error deta islye mai oskooper bana k nichy {} k thrugh access kr ri o... */}
   {/* <Card channel = "Chai aur Code" someArr = {newArr} someObje = {myObj} /> */}
   <Card username = "chaiaurcode"/>
   <Card/>
    </>
  )
}

export default App
