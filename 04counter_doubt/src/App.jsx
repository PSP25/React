import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue=()=>{
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    // though we have multiple setCount calls but due to the 
    //react fibre txt file  read previously
    //we know that react waits and updates value to the virtual DOM
  //after our event handler finishes react re-renders the component

  //alternate way to do it
  //setCount takes call back function
  //by that method,each setCount is treated differently thus making
  //things separate from each other

  setCount((count)=>count+1)
  setCount((count)=>count+1)
  setCount((count)=>count+1)
  }
  const decrValue=()=>{
    setCount(count-1)


  setCount((count)=>count-1)
  setCount((count)=>count-1)
  setCount((count)=>count+1)
  }
  return (
    <>
      <h1>What if we cet the counter multiple times and call the setCounter
        function smany times one after other, will it work
      </h1>
      <h2>{count}</h2>
      <button onClick={addValue}>Count Up</button>
      <button onClick={decrValue}>Count Down</button>
    </>
  )
}

export default App
