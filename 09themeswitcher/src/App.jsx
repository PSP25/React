import "./App.css";
import {ThemeProvider} from './context/theme';
import {useState,useEffect} from 'react';
import ThemeBtn from './components/ThemeBtn'
import Card from  './components/Card';


//there is a small change in the tailwind file,do look the difference 
function App() {
  const [theme,setTheme]=useState("light")

  const lightTheme=()=>{
    setTheme("light")
  }
  const darkTheme=()=>{
    setTheme("dark")
  }

  //actual change in theme using js
  useEffect(() => {
    const docSelect=document.querySelector('html').classList
    docSelect.remove("light","dark");
    docSelect.add(theme);
  }, [theme])
  
  return (
    <ThemeProvider value={{theme,darkTheme,lightTheme}}>
      {/* these above functions need defination and that can be done by 
      defining the functions above return */}
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
          <Card/>
        </div>

        <div className="w-full max-w-sm mx-auto">{/* {card} */}</div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
