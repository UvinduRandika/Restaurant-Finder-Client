import React, { useState, createContext } from "react";


export const Context = createContext();

export const ContextProvider = props => {
    const [restaurants, setRestaurant] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState("");

    const add = (restaurant) => {
        setRestaurant([...restaurants, restaurant]);


    }


    return (
        <Context.Provider value={{ restaurants, setRestaurant, add, selectedRestaurant, setSelectedRestaurant }}>
            {props.children}
        </Context.Provider>
    )
}