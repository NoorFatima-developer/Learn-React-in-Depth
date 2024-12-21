import React from 'react'

function Github() {

    function GitHub(){
        fetch('https://api.github.com/users/NoorFatima-developer')
        .then(res => res.json())
        .then(data => console.log(data))
    }


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: 
    </div>
  )
}

export default Github
