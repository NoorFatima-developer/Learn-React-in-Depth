import { StrictMode } from 'react'
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




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
  // React akhir h tu js e h na so we can do this below as well...
//   createRoot(document.getElementById('root')).render(
//     MyApp()
//   )
// )

