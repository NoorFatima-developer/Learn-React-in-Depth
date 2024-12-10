import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Ab compiler jo h babel wo jsx yani js k andr jo ye html code h osko js m convert kr rha hai behind the scene...


function MyApp(){
  return (
    <div>
      <h1>My First React App</h1>
      <p>Welcome to the Chai aur React website</p>
    </div>
  )
}

// m sochogi yahan pr k jsx babel compiler k through jsx ko js m convert kr rha hai...
// tu aghr m direct e osko js ka code dedo tu kea pta oska 1 step bach jye or fer b code run o jye tu m ye try krogi
// TRY:

// NOT WORKING...(because its an object)
// Khudsy create kea hoa syntax:

// const createElement1 = {
//   type: 'a',
//   props: {
//       href: "https://www.google.com",
//       target: "_blank"
//   },
//   Children: "Visit Google"
// }


// WORKING...(but not a convenient way...)
const anotherElement = (
  <a href="http://google.com" target="_blank">Visit Google</a>
)


// Ab element create krty hain but iss ki dfa react k hesab sy:
// (Special syntax)

const createElement = React.createElement(
  'a',
  { href: "https://www.google.com", target: "_blank" },
  "Visit the Google"
)

createRoot(document.getElementById('root')).render(
  
  // <StrictMode>
  //   {/* <MyApp /> */}
  //   {/* lkin ye tu kam e ni kr rha ku k isk andr object hau chlo new func bana k dekhti o */}
  //   {/* <createElement1 /> */} //Not working...
  // </StrictMode>,

  // strict mode k bagair meny anotherelement ko essy run kea hai and it has done...
  // anotherElement     //working...
  createElement         //working...

  

// React akhir h tu js e h na so we can do this below as well...
//   createRoot(document.getElementById('root')).render(
//     MyApp()
//   )
// )

)