import React from "react";
import UserContext from "./UserContext";

//children is anything that is given by UserContext, pass it as it is
//if userContext is a box then the children are the components we want in them
//it can be div, etc.

const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null);//any data that you want to provide access to
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;