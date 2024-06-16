import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    // we can use wrapers similar to provider 
    <>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
