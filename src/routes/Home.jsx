import React from "react"
import Header from "../components/Header"
import New from "../components/New"
import Show from "../components/Show"
import NavBar from "../components/NavBar"
const Home = () => {
   return(
    <div>
       
        <NavBar/>
        <Header/>
        <New/>
        <Show/>
    </div>
   )
}

export default Home