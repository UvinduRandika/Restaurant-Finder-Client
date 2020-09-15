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
                console.log(response.data.data.reviews);
            } catch (err) {
                console.log(err);
            }


        }
        data();
    }, []);



    return <div>
        
            <>
            <div className="mt-3">
                <Reviews reviews={selectedRestaurant.reviews}/>
               
            </div>
            <div>
            <AddReview/>
            </div>
            </>
        
    </div>
}

export default Restaurants;
