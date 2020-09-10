import React from "react"
const Show = () => {
   return(
    <div className= "list group">
        <table className="table table-hover table-dark">
        <thead>
            <tr className="big-primary">
                <th scope="call">Restaurants</th>
                <th scope="call">Location</th>
                <th scope="call">Price Range</th>
                <th scope="call">Ratings</th>
                <th scope="call">Edit</th>
                <th scope="call">Delete</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <td>McDonads</td>
                <td>New York</td>
                <td>$</td>
                <td>Rating</td>
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>

            </tr>

            <tr>
                <td>McDonads</td>
                <td>New York</td>
                <td>$</td>
                <td>Rating</td>
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>

            </tr>
        </tbody>

        </table>
    </div>
   )
}

export default Show