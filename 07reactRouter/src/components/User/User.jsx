import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    // Use here as a custom hook...
    const { id } = useParams()

  return (
    <div className='bg-gray-600 text-white text-3xl p-4 rounded-lg w-60 m-auto'>
      User:{id}
    </div>
  )
}

export default User
