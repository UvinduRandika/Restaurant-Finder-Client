import React from "react"
const New = () => {
   return(
    <div className= "mb-5">
        <form action="">
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Name"></input>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Location"></input>
                </div>
                <div className="col">
                   <select className="custom-select my-1 mr-sm-2">
                    <option disabled>Price Range</option>
                    <option value= "1">$</option>
                    <option value= "2">$$</option>
                    <option value= "3">$$$</option>
                    <option value= "4">$$$$</option>
                    <option value= "5">$$$$$</option>
                   </select>
                </div>
                    <button className="btn btn-primary">Add New</button>
                
             </div>
        </form>

    </div>
   )
}

export default New