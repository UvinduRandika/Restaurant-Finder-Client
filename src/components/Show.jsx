import React, {useEffect, useContext} from "react"
import Finder from "../apis/Finder"
import { Context } from "../Context/Context"


const Show = (props) => {
   const{restaurants, setRestaurant} =useContext(Context);

useEffect(() => {
    const data = async () => {
        try {
            const response = await Finder.get("/");
            setRestaurant(response.data.data.restaurants);
          } catch (err) {
              
          }
    };
  
    data();
},[])
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
                <td><button className="btn btn-warning">Update</button></td>
                 <td><button className="btn btn-danger">Delete</button></td>

            </tr>
               )

             
           })}
        </tbody>

        </table>
    </div>
   )
}

export default Show