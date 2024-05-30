import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//Ap here is afunction and thus if we create a function here that returns
//an element then also it shoud work let's check

function MyApp(){
  return(
    <div>Myapp is working</div>
    //but the customreact that we build takes help of reactElement object to
    // create the element
    //here the default library does this for us when we send the details to it.
  )
}

//this doesnt work uniquely as every library has it's own syntaxes
//and we haven't allign to the basic react syntaxes
//the BTS execution might expaect different parameters than whati we are providing
// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blanc'
//   },
//   children:'click me to visit google'
// }

const anotherElement=(
  <a href='https://google.com' target='_blanc'>Visit Google</a>
)
//this above variable gets converted succesfully as we pass this variable and the BTS
//function converts it into the desired object internally


//correct method to create react element
//react create element
//it has a predefined syntax

const newReactElement=React.createElement(
        //first it expects tag name
        'a',
        //2nd it expects attributes
        {href:'https://google.com',target:'_blanc'},
        //3rd it exepects the text
        'click me to go to google'
)


const username="psp and react"
const newReactElement2=React.createElement(
  //first it expects tag name
  'a',
  //2nd it expects attributes
  {href:'https://google.com',target:'_blanc'},
  //3rd it exepects the text
  'click me to go to google',
  username
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp />//will work
    // MyApp()

    // reactElement

    // anotherElementElement

    // newReactElement

    //go to the App file to know how to handle variable in react

    //why can't use anything other than evaluated expressions
    
    newReactElement2

)
