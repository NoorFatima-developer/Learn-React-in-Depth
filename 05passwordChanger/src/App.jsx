import { useCallback, useState } from 'react'
import './App.css'

function App() {

  // Collect all variables jo jo hamy chahye...
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState('false');
  const [charAllowed, setCharAllowed] = useState('false');
  const [password, setPassword] = useState('');

  function passwordGenerator = useCallback(( ) => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123';

    if (numberAllowed === 'true') {
      str += '0123456789';
    }

    if (charAllowed === 'true') {
      str += '!@#$%^&*()_+=-{}[]|:;"<>,.?/~`';
    }

   for (let i = 1; i <= array.length; i++) {
     pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    
   }

  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <h1 className='text-4xl text-center'>Test</h1>
    </> 
  )
}

export default App


