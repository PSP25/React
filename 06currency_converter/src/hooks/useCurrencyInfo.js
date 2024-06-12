// //custom hooks can be as simple as creating a basic function that returns some value

//custom hooks can use builtin hoooks
import {useEffect, useState} from "react"
function useCurrencyInfo(currency){
    //i want to call an api only when this hook is called(hint::  useEffect)
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))

        console.log(data);

    },[currency])
    //what to return data (or) [data, setdata] (or) 
    //actually return data
    return data

}

//this below lin is key process in hooks
//it returns the whole hook thus we run it and as the hook function returns 
//the data we can get the data
export default useCurrencyInfo;


        //reference code

// import {useEffect, useState} from "react"
// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;