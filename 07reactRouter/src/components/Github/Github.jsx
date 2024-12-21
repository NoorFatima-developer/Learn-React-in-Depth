import React, { useEffect } from 'react'

function Github() {

    function GitHub(){
        // fetch data from github api
        // and update state with the fetched data

        // Fetch data and render by using useEffect...
        useEffect( () => {
            useEffect( () => {
                fetch('https://api.github.com/NoorFatima-developer')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setData(data);
                })
            }, [])
        })
    }

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: 
    </div>
  )
}

export default Github
