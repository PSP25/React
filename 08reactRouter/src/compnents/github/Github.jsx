import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/hiteshchoudhary')
    //   .then(response=>response.json())
    //   .then(data=>{
    //         console.log(data);
    //         setData(data)
    //   })
    // }, [])
   
    
    //there is another way called as "loader" in the navlink of header
    //we can directly call the fetch there and the response is called and stored in chache
    //even before click of the github button
    //what we need is the functionality of the fetch below here
    //and aspecial hook to hanle the state
  return (
    <div className='text-centre  m-4 bg-gray-600 text-white
    p-4 text-3xl'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="avtar" />
    </div>
  )
}

export default Github


export const githubDataLoader=async()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}