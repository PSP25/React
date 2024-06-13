import React,{useState} from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


// rewatch the 1st 10 min of the video on chai aur code about context api with 2 projects
//or in the english channel hitesh choudury

function App() {
  return (
    <UserContextProvider>
      <h1>Psp Context api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
