import React, { useState, useContext } from 'react'
import UserContext  from '../context/UserContext';
function Login() {
    const [username, setusername] = useState([])
    const [password, setpassword] = useState([])

    // Ab hum useContext ko apny components k andr kesy use krygy..jesy ye mai login.jsx k andr use kr rhi hun tu m kesy krogi...
    // Tu osklye i will do this:

    // ye setUser whi hai jo hmny UserContextProvider k andr pass kea hai...
    const {setUser} = useContext(UserContext)

    // handleSubmit function to handle form submission
    const handleSubmit = () => {
        // By default jb b hum log submit krty hain tu value "url" k through kahi na kahi chly jti hai POST method k through..
        // Tu I want k value kahi b na jye tu osklue I will use this default behaviour...
        e.preventDefault();

    }
  return (
    <div>
      <h2>Login</h2>
      {/* Abi tk values hawa mai hain wo hum govern krygy values ko by using value and onchange... */}
      <input type="text" value={username} onChange={(e) => username(e.target.value)} placeholder='username'/>
      <input type="password" value={password} onChange={(e) => password(e.target.value)} placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
