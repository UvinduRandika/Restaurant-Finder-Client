import React, { useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import { Context } from "../Context/Context";
import Finder from "../apis/Finder";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const Restaurants = () => {
    const { id } = useParams()
    const { selectedRestaurant, setSelectedRestaurant } = useContext(Context)

    useEffect(() => {
         const data = async () => {

             try {
                 const response = await Finder.get("/" + id);

                 setSelectedRestaurant(response.data.data);
                 console.log(selectedRestaurant.restaurants);  
             } catch (err) {
                 console.log(err);
             }


         }
         data();
       
    }, []);



    return <div>
        
            { selectedRestaurant && 
            (<h1 className="text-center display-1">{selectedRestaurant.restaurants.name}
             <h4><StarRating rating= {selectedRestaurant.restaurants.average_rating}/>
             <span className="text-warning ml-1">({selectedRestaurant.restaurants.count})</span>
             </h4></h1>
           
            
            )
            }
            <div className="text-center">
              
          
            </div>
            <div className="mt-3">

            { selectedRestaurant && (<Reviews reviews={selectedRestaurant.reviews}/>)}
               
            </div>
            <div>
            <AddReview/>
            </div>
        
    </div>
}

export default Restaurants;
