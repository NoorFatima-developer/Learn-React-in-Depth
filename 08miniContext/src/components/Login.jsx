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
      <input type="text" placeholder='username'/>
      <input type="password" placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
