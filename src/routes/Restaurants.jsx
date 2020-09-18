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
                 console.log(selectedRestaurant);  
             } catch (err) {
                 console.log(err);
             }


         }
         data();
       /* const res = {
            restaurant : {
              name: "sdfgh",
              average_rating: 4,
              count: 5
            },
            reviews : [
              {
                id: 1,
                restaurant_id: 5,
                name: "dfgh",
                review: "dfghjklfvgbhjhn",
                rating: 1
              }
            ]
          };
      
          setSelectedRestaurant(res);

          console.log(JSON.stringify(selectedRestaurant), 'sdfghjk'); */
    }, []);



    return <div>
        
            { selectedRestaurant && 
            (<h1 className="text-center display-1"> {(selectedRestaurant.restaurants.name)}</h1>)
            }
            <div className="mt-3">

            { selectedRestaurant && (<Reviews reviews={selectedRestaurant.reviews}/>)}
               
            </div>
            <div>
            <AddReview/>
            </div>
        
    </div>
}

export default Restaurants;
