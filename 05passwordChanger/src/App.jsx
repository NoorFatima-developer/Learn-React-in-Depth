import { useCallback, useState, useEffect, useRef } from 'react'
// import './App.css'

function App() {

  // Collect all variables jo jo hamy chahye...
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState('false');
  const [charAllowed, setCharAllowed] = useState('false');
  const [password, setPassword] = useState('');

  //usRef hook:(useRef ko hum variable k andr store krty hain...)

  const passwordRef = useRef(null)

  // useCallback hook:(basically hmry function ko memorize krta hai jitna hosky...)
  const passwordGenerator = useCallback(( ) => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123';

    if (numberAllowed === 'true') {
      str += '0123456789';
    }

    if (charAllowed === 'true') {
      str += '!@#$%^&*()_+=-{}[]|:;"<>,.?/~`';
    }

   for (let i = 1; i <= length; i++) {
     let char =  Math.floor(Math.random() * str.length + 1);
     pass += str.charAt(char)
    
   }
   setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  // not working(react m hum func ko direct call ni krksty) so we will use useEffect hook..
  // passwordGenerator()


  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    // nichy waly dono focus klye hain but range deni o tu must used second wala...
    passwordRef.current?.focus();
    // passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

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
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none text-white bg-blue-700 px-3 py-0.3 shrink-0 '>Copy</button>
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
            onChange={ () =>
              setNumberAllowed((prev) => !prev)
            }
            // onChange={(e) => {setNumberAllowed(e.target.checked? 'true' : 'false')}}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap=x=1'>
            <input 
            id='numberInput'
            type='checkbox'
            defaultChecked = {charAllowed}
            onChange={()=>
              setCharAllowed((prev) =>!prev)
            }
            // onChange={(e) => {setNumberAllowed(e.target.checked? 'true' : 'false')}}
            />
            <label htmlFor='numberInput'>Characters</label>
          </div>
      </div>
     </div>
    </> 
  )
}

export default App


// useCallback basically hum code optimization klye krty hain...
// Usecallback ka mtlb hai k aghr mera method run hota hai tu osko optimize krdo.
// lkin useeffect ka mtlb h k hum jb koi cher char kr rye hai tb phr sy osko run krdo
// and mjy kisi b chez ka reference leta hota hai tu i used useref..
// and useref tb use hota hai jb m kisi specific part ko copy krna chah ri o let say..