
import React, { useState, useEffect, useContext } from "react"
import { useParams, useHistory } from "react-router-dom";
import Finder from "../apis/Finder"
import { Context } from "../Context/Context";

const SignUp = () => {
    const { id } = useParams();
    let history = useHistory();
    const { restaurants } = useContext(Context);
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [location, setLocation] = useState("");

    useEffect(() => {
        const data = async () => {
            try {

                const response = await Finder.get("/" + id);

                console.log(response.data.data.restaurants.name);


                //setRestaurant(response.data.data.restaurants);
            } catch (err) { }
        };

        data();
    }, []);

    const submit = async (e) => {
        e.preventDefault();
       
        try {
            const requestBody = {
                name,
                password,
                
                
            };
            console.log(requestBody);
         const response = await Finder.post("/SignUp",requestBody);
           // add(response.data.data.restaurant);
           

           history.push("/");
        } catch (err) {
           console.log("submit error",err);
           // alert("submit error",err);
        }   

    }
    return (
        <div>
            <h1 className="text-center">Sign Up</h1>
            <form action="" >
                <div className="form-group">

                    <label htmlFor="name">name</label>
                    <input value={name} onChange={e => setName(e.target.value)} id="name" className="form-control" type="text" />

                </div>
                <div className="form-group">

                    <label htmlFor="password">Password</label>
                    < input value={password} onChange={e => setPassword(e.target.value)} id="password" className="form-control" type="password" />

                </div>
                <button onClick={submit} className="btn btn-primary">Submit</button>

            </form>
        </div>
    )

}

export default SignUp