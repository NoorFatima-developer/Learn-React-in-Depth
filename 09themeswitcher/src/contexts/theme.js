import { createContext, useContext } from "react";

// 2nd way to create a contextApi...

// Way 1 k andr hum kuch iss trhan krty thy k hum API create 1 file m krty thy and then API provider dosri file m krty thy and
// then hum osko App.jsx k andr consume krty thy...

// Lkin issmai hum createContext or provide wala kam 1 e file m krygy...



// ...........createContext......
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// ............Provider........

export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){
    return useContext(ThemeContext)
}