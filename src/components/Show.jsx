import React, {useEffect, useContext} from "react"
import Finder from "../apis/Finder"
import { Context } from "../Context/Context"
import { useHistory } from "react-router-dom";


const Show = (props) => {
   const{restaurants, setRestaurant} =useContext(Context);
    let history= useHistory();
useEffect(() => {
    const data = async () => {
        try {
            const response = await Finder.get("/");
            setRestaurant(response.data.data.restaurants);
            console.log(response.data.data);
          } catch (err) {}
    };
  
    data();
},[]);

const Delete = async (id) =>{
    console.log(id);
    try {
        const response =await Finder.delete(id);
        setRestaurant(restaurants.filter(restaurant => {
            return restaurant.id !==id
        } 

        ))
        console.log(response);
    } catch (err) {
        
    }   
};

const Update = async (id) =>{
     history.push("restaurants/"+id+"/update")
   
};
   return(
    <div className= "list group">
        <table className="table table-hover table-dark">
        <thead>
            <tr className="big-primary">
                <th scope="col">Restaurants</th>
                <th scope="col">Location</th>
                <th scope="col">Price Range</th>
                <th scope="col">Ratings</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>

            </tr>
        </thead>
        <tbody>
           {restaurants.map(restaurant => {
               return(
                <tr key={restaurants.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>reveiw</td>
                <td><button onClick={() =>Update(restaurant.id)} className="btn btn-warning">Update</button></td>
                 <td><button onClick={() =>Delete(restaurant.id)} className="btn btn-danger">Delete</button></td>
                 

            </tr>
               )

             
           })}
        </tbody>

        </table>
    </div>
   )
}

export default Show

