import React, { useEffect } from 'react'

function Github() {

    function GitHub(){
        // fetch data from github api
        // and update state with the fetched data

        const [data, setData] = React.useState([]);
        // Fetch data and render by using useEffect...
        useEffect( () => {
            useEffect( () => {
                fetch('https://api.github.com/NoorFatima-developer')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // And once m render kerwa logi then I will updatE UI by using UseState ku k data ko set b tu krna h na data k andr...
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
