import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* Yahan hum React Router DOM pr rhy hain islye humy yahan pr App ki zrort e ni hai hum RouterProvider sy sara kam krskty hain */}
    {/* And ye ReactProvider apny andr 1 hi component leta hai and wo h router or wo apny andr props pass krta hai osk bagair wo kam nahi krta... */}
    
    <RouterProvider router={router}/>
  </StrictMode>
)
