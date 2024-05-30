import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//a direct change in the variable  in JS doesnot updates the UI in react
//that is the reason react offered hooks thats internally takes control of the 
//UI update of variable, states on any change in JS
//better read the react GitHub library


function App() {
  let counter=5
    const [count,setCount]=useState(0)
  return (
    <>
      <h1>psp and react</h1>
      <h2>Counter value:{count}</h2>
      <button
      onClick={()=>{
        if(count<20)setCount(count+1)

      }}>Add Value</button>
      <button onClick={()=>{
        if(count>0)setCount(count-1)
      }}>Remove Value</button>
    </>
  )
}

export default App
