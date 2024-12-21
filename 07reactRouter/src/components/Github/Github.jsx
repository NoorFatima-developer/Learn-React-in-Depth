import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

    function GitHub(){
        const data  = useLoaderData(githubInfoLoader)
        // fetch data from github api
        // and update state with the fetched data

        // const [data, setData] = useState([]);
        // // Fetch data and render by using useEffect...
        //     useEffect(() => {
        //         fetch('https://api.github.com/users/NoorFatima-developer')
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             // And once m render kerwa logi then I will updatE UI by using UseState ku k data ko set b tu krna h na data k andr...
        //             setData(data);
        //         })
        //     }, [])
    

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='Github Picture' width={200}/>
    </div>
  )

}   


export default GitHub;
    

// Meny API-fetch jesa k useEffect ko use krk data oss sy fetch kea hai...wahi kam hum
// loader use krk directly and optimized way sy b krwa skty hain ...

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/NoorFatima-developer');
    const data = await response.json();
    // return krskty hain and wesy b ye promise hai islye tu oper hum bar bar .then laga parahy thy...
    return data;
}