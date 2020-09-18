import React, { useState } from "react";
import Finder from "../apis/Finder";
import { useParams, useHistory, useLocation } from "react-router-dom";

const AddReview = ({ rating }) => {
    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();

    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [ratings, setRatings] = useState("1")
    const submit = async (e) => {
        e.preventDefault();

        try {
            const requestBody = {
                name: name,
                review: text,
                rating: ratings,
            };
            console.log(requestBody);

            const response = await Finder.post("/" + id + "/addReview", requestBody);
            console.log(response);
            history.push("/");
            history.push(location.pathname);

        } catch (err) {
            console.log("submit error", err);

        }

    }

    return (
        <div className="mb-2">
            <form action="">
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} id="name" placeholder="name" type="text" className="form-control" />
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="rating">Rating</label>
                        <select value={ratings} onChange={e => setRatings(e.target.value)} id="rating" className="custom-select">
                            <option disabled>Rating</option>
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
                    <textarea value={text} onChange={e => setText(e.target.value)} id="review" className="form-control"></textarea>
                </div>
                <button onClick={(e) => submit(e)} className="btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddReview 