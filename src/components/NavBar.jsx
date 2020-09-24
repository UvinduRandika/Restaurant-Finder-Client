import React from 'react'
import { useHistory } from 'react-router-dom';


const NavBar = () => {
    let history = useHistory();

    const Sign_up = async () => {

       
        history.push("/SignUp")

    };

    return (
        <nav class="navbar navbar-light">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">WebSiteName</a>
          </div>
         
          <ul class="nav">
          <button onClick={(e) => Sign_up()} className="btn btn-primary float-right mr-1">Sing Up</button>
          <button className="btn btn-primary mr-1">Log In</button>
          <button className="btn btn-primary float-right ">Log Out</button>
          
          </ul>
        </div>
      </nav>
   
    )
}

export default NavBar
