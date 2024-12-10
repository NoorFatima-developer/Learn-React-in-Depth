import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


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
    <App />
  </StrictMode>,
)

