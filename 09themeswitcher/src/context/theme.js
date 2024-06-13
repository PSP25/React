import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    theme: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
//we create a custom hook that helps us access the context instead of a separate file as
//previously done by provider.jsx


