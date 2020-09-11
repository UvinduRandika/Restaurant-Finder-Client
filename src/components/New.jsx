import React, { useState, useContext } from "react"
import Finder from "../apis/Finder";
import { Context } from "../Context/Context";
const New = () => {
    const {add} = useContext(Context);

    const [name, setName] =useState("");
    const [location, setLocation] =useState("");
    const [priceRange, setPriceRange] =useState("Price Range");

    const submit = async (e) => {
       
        try {
            const requestBody = {
                name: name,
                location: location,
                price_range: priceRange,
            };
            console.log(requestBody);
         const response = await Finder.post("/",requestBody);
            add(response.data.data.restaurant);
           
        } catch (err) {
           console.log("submit error",err);
           // alert("submit error",err);
        }

    }
   return(
    <div className= "mb-5">
        <form action="">
            <div className="form-row">
                <div className="col">
                    <input value= {name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name"></input>
                </div>
                <div className="col">
                    <input value= {location} onChange={e => setLocation(e.target.value)} type="text" className="form-control" placeholder="Location"></input>
                </div>
                <div className="col">
                   <select value= {priceRange} onChange={e => setPriceRange(e.target.value)} className="custom-select my-1 mr-sm-2">
                    <option disabled>Price Range</option>
                    <option value= "1">$</option>
                    <option value= "2">$$</option>
                    <option value= "3">$$$</option>
                    <option value= "4">$$$$</option>
                    <option value= "5">$$$$$</option>
                   </select>
                </div>
                    <button onClick={submit} className="btn btn-primary">Add New</button>
                
             </div>
        </form>

    </div>
   )
}

export default New