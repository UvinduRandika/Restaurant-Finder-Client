import React, { useState } from "react";
const AddReview = ({ rating }) => {

    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [ratings, setRatings] = useState("Rating")
    return (
<div className="mb-2">
    <form action="">
        <div className="form-row">
            <div className="form-group col-8">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={e => setName(e.target.value)} id="name" placeholder="name" type="text" className="form-control"/>
            </div>
            <div className="form-group col-4">
                <label htmlFor="rating">Rating</label>
                <select value={ratings} onChange={e => setRatings(e.target.value)}  id="rating" className="custom-select">
                <option disabled>Price Range</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="review">Review</label>
            <textarea value={text} onChange={e => setText(e.target.value)}  id="review" className="form-control"></textarea>
        </div>
        <button className="btn-primary">Submit</button>
    </form>
</div>
    )
}

export default AddReview 