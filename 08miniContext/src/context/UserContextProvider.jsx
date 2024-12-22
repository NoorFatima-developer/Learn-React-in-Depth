import React, { useState } from "react";
import UserContext from "./UserContext";


// Way 02... Provider....
// children 1 variable  hai m kuch or b leksti and children mnz div and all data jo k fragment k andr wrap hota hai that;s it...
const UserContextProvider = ({children})=> {

    const [user, setUser] = useState(null)
    return(
        // isklye hum value mai object pass krty hain...and object m wo data hota hai jisko hmny pass krna hota hai....
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;