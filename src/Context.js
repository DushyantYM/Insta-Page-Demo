import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

const UserData = createContext();

const Context = ({children}) => {

    const [userInfo] = useFetch(`https://jsonplaceholder.typicode.com/users/1`);
    const [postsData] = useFetch(`https://jsonplaceholder.typicode.com/photos`);

   return (<UserData.Provider value={{userInfo , postsData}}>
             {children}
    </UserData.Provider>)

}

export const UserState = () => {
    return useContext(UserData)
}

export default Context;