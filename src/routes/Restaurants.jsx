import React, {useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import { Context } from "../Context/Context";
import Finder from "../apis/Finder";

const Restaurants = () =>{
    const {id} = useParams()
    const {selectedRestaurant, setSelectedRestaurant}= useContext(Context)

useEffect(() =>{
    const data = async() =>{
       
try {
    const response= await Finder.get("/"+id);
       
        setSelectedRestaurant(response.data.data.restaurats);
} catch (err) {
    console.log(err);
}

        
    }
    data();
},[]);

 

return <div>Detail Page</div>
}

export default Restaurants;
