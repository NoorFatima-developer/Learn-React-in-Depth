import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  // Actual change in theme:

  useEffect(() => {

    // Both code have same work, I can use any Code from both of them...
    // document.querySelector('html').classList.remove("light", "dark")
    // document.querySelector('html').classList.add(themeMode)

    document.body.classList.remove(themeMode === "light"? "dark" : "light")
    document.body.classList.add(themeMode)
  }, [themeMode]);

  return (

    // ............Consumer........
    // Pehly context creat k way m hum values ko provider k andr e pass krty thy yahan pr hum during consumer pass krygy...
    // Ab pichly context API k andr hmny jo b provider k andr methods bananye thy wo define b thy ab ye tu define ni tu osklye hum 1 1 ko pkr k seoarate func bana k osmai daal degy tu yr b same oski trhan hi behave krygy....
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
         
          <div className="flex flex-wrap min-h-screen items-center bg-black">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* ThemeBtn */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                       <Card/>
                    </div>
                </div>
            </div>

    </ThemeProvider>

  )
}

export default App
