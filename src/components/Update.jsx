
import React, { useState, useEffect, useContext } from "react"
import { useParams, useHistory } from "react-router-dom";
import Finder from "../apis/Finder"
import { Context } from "../Context/Context";

const Update = (props) => {
const {id} =useParams();
let history =useHistory();
const {restaurants} =useContext(Context);
const [priceRange, setPriceRange] =useState("Price Range");
const [name, setName] =useState("");

const [location, setLocation] =useState("");
 
useEffect(() => {
    const data = async () => {
        try { 
            const response = await Finder.get("/"+id);
           
            console.log(response.data.data.restaurants.name);
 
            setName(response.data.data.restaurants.name)
            setLocation(response.data.data.restaurants.location)
            setPriceRange(response.data.data.restaurants.price_range)
            
 
          //  setRestaurant(response.data.data.restaurants);
          } catch (err) {}
    };
  
    data();
},[]);

const submit = async (e) => {
       
    e.preventDefault();
        const requestBody = {
            name,
            location,
            price_range: priceRange,
        };
        console.log(requestBody);
     const updateRes = await Finder.put("/"+id,requestBody);
     
       
     history.push("/");   
       

}
    return(
        <div>
            <h1 className="text-center">Update Restaurant</h1>
            <form action="" >
                <div className="form-group">

                    <label htmlFor="name">name</label>
                    <input value= {name} onChange={e => setName(e.target.value)} id="name" className="form-control" type="text"/>

                </div>
                 <div className="form-group">
               
                    <label htmlFor="location">location</label>
                    < input value= {location} onChange={e => setLocation(e.target.value)} id="location" className="form-control" type="text"/>
                 
                </div>
                <div className="form-group">

                    <label htmlFor="price_range">price range</label>
                    <select value= {priceRange} onChange={e => setPriceRange(e.target.value)} className="custom-select my-1 mr-sm-2">
                    <option disabled>Price Range</option>
                    <option value= "1">$</option>
                    <option value= "2">$$</option>
                    <option value= "3">$$$</option>
                    <option value= "4">$$$$</option>
                    <option value= "5">$$$$$</option>
                   </select>


                  
                </div>    
                <button onClick={submit} className ="btn btn-primary">Submit</button>

            </form>
        </div>
    )

}

export default Update