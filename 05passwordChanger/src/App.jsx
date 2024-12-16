import { useCallback, useState } from 'react'
// import './App.css'

function App() {

  // Collect all variables jo jo hamy chahye...
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState('false');
  const [charAllowed, setCharAllowed] = useState('false');
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(( ) => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123';

    if (numberAllowed === 'true') {
      str += '0123456789';
    }

    if (charAllowed === 'true') {
      str += '!@#$%^&*()_+=-{}[]|:;"<>,.?/~`';
    }

   for (let i = 1; i <= array.length; i++) {
     let char =  Math.floor(Math.random() * str.length + 1);
     pass += str.charAt(char)
    
   }

  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden w-full mb-4'>
        <input
        type='text'
        value = {password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        />
        <button className='outline-none text-white bg-blue-700 px-3 py-0.3 shrink-0 '>Copy</button>
      </div>

      <div className='flex flex-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>length:{length}</label>
          </div>
          <div className='flex items-center gap=x=1'>
            <input 
            id='numberInput'
            type='checkbox'
            defaultChecked = {numberAllowed}
            onChange={(prev) => {!prev}}
            // onChange={(e) => {setNumberAllowed(e.target.checked? 'true' : 'false')}}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
      </div>
     </div>
    </> 
  )
}

export default App


