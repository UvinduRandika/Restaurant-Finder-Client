  import React, {useState, createContext} from "react";


export const Context= createContext();

export const ContextProvider = props => {
    const [restaurants, setRestaurant]= useState([])

    return(
        <Context.Provider value={{restaurants, setRestaurant}}>
            {props.children}
        </Context.Provider>
    ) 
}