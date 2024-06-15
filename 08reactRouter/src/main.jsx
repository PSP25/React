import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './compnents/home/Home.jsx'
import About from './compnents/about/About.jsx'
import Contact from './compnents/contact/Contact.jsx'
import User from './compnents/user/User.jsx'
import Github, { githubDataLoader } from './compnents/github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]  
//   }
// ])
//the only componenet we need to make is routerProvider, it takes a prop 
//so we created it above

//alternate method

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>

      <Route path='user/:id' element={<User/>}></Route>
      {/* this is imp and used for user specific data and dom manipulation
      you can modify it in User.jsx */}
      <Route
      loader={githubDataLoader} 
      path='github' 
      element={<Github/>}>

      </Route>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
