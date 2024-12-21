import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// ye jo createBrowserRouter hai ye apny andr array leta hai or osmai objects jitny b hum lena chahain lkin oss objec k andr 2 chezain leta hai 1 path or 1 element...


// Two ways to create router...

// One way to create router(Difficult Way):
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       { path: '', element: <Home/> },
//       { path: '/about', element: <About/> },
//       { path: '/contact', element: <Contact/> },
//     ]
//   }
// ])


// Second way to create router(Easiest Way):

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:id' element={<User/>} />
      <Route path='user/:id' element={<Github/>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* Yahan hum React Router DOM pr rhy hain islye humy yahan pr App ki zrort e ni hai hum RouterProvider sy sara kam krskty hain */}
    {/* And ye ReactProvider apny andr 1 hi component leta hai and wo h router or wo apny andr props pass krta hai osk bagair wo kam nahi krta... */}
    
    <RouterProvider router={router}/>
  </StrictMode>
)
