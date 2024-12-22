import React from 'react'

function Login() {
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
