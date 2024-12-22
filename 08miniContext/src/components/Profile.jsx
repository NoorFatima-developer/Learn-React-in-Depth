import {React,useContext}  from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    // Ab ye components haina tu components k andr hum log 2 chezo ko import krty hain
    // 1---useContext ko...
    //2----UserCpntext ko (jahan osko create kea hota hai oska path...)
  const {user} = useContext(UserContext)

  if(!user)
    return <div>Please Login...</div>

  return (
    <div>
        Welcome {user.username}
    </div>
  )
}

export default Profile
