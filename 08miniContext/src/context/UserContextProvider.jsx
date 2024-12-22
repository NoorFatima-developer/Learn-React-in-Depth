import React, { useState } from "react";
import UserContext from "./UserContext";


// Way 02... Provider....
const UserContextProvider = (children)=> {

    const [user, setUser] = useState(null)
    return(
        // isklye hum value mai object pass krty hain...and object m wo data hota hai jisko hmny pass krna hota hai....
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;