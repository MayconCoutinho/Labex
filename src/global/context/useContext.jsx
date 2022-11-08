import { createContext, useEffect } from "react";
import { useState } from "react";
import { GetTrips } from "../../services/viagensApi";

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {
    const [update, setUpdate ] = useState(0)
    const [trips, setTrips] = useState()
    const [token, setToken] = useState()

    
    useEffect(() => {
        const result = GetTrips()
        result.then((response) => {setTrips(response.trips)})
    },[update])

    return (
        <GlobalContext.Provider value={{ trips, setUpdate, token, setToken}}>{children}</GlobalContext.Provider>
    )
} 