import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

// ye jo createBrowserRouter hai ye apny andr array leta hai or osmai objects jitny b hum lena chahain lkin oss objec k andr 2 chezain leta hai 1 path or 1 element...

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: '', element: <Home/> },
      { path: '/about', element: <About/> },
      { path: '/contact', element: <Contact/> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* Yahan hum React Router DOM pr rhy hain islye humy yahan pr App ki zrort e ni hai hum RouterProvider sy sara kam krskty hain */}
    {/* And ye ReactProvider apny andr 1 hi component leta hai and wo h router or wo apny andr props pass krta hai osk bagair wo kam nahi krta... */}
    
    <RouterProvider router={router}/>
  </StrictMode>
)
