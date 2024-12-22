import React, { useState } from 'react'

function Login() {
    const [username, setusername] = useState([])
    const [password, setpassword] = useState([])

    // handleSubmit function to handle form submission
    const handleSubmit = () => {

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
