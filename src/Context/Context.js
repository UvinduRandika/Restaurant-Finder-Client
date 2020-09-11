  import React, {useState, createContext} from "react";


export const Context= createContext();

export const ContextProvider = props => {
    const [restaurants, setRestaurant]= useState([]);

    const add =(restaurant) => {
        setRestaurant([...restaurants, restaurant]);


    }


    return(
        <Context.Provider value={{restaurants, setRestaurant, add}}>
            {props.children}
        </Context.Provider> 
    ) 
}