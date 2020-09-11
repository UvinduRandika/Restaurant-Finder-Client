
import React, { useState } from "react"
import { useParams } from "react-router-dom";


const Update = (props) => {
const {id} =useParams();
const [priceRange, setPriceRange] =useState("Price Range");
console.log(id);
    return(
        <div>
            <h1 className="text-center">Update Restaurant</h1>
            <form  action="">
                <div className="form-group">

                    <label htmlFor="name">name</label><hr/>
                    <input id="name" classname="form-control" type="text"/>

                </div>
                 <div className="form-group">

                    <label htmlFor="location">location</label>
                    <input id="location" classname="form-control" type="text"/>

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

            </form>
        </div>
    )

}

export default Update