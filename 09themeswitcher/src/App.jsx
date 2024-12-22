import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  return (

    // ............Consumer........
    // Pehly context creat k way m hum values ko provider k andr e pass krty thy yahan pr hum during consumer pass krygy...
    // Ab pichly context API k andr hmny jo b provider k andr methods bananye thy wo define b thy ab ye tu define ni tu osklye hum 1 1 ko pkr k seoarate func bana k osmai daal degy tu yr b same oski trhan hi behave krygy....
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
         <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </ThemeProvider>

  )
}

export default App
