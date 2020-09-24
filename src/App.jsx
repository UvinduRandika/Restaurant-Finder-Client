import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Restaurants from "./routes/Restaurants";
import Update from "./routes/UpdateR";
import Home from "./routes/Home";
import { ContextProvider } from "./Context/Context";
import SignUp from "./components/SignUp";

const App = () =>{
    
return <div>
   
    <ContextProvider>
    <div className="container">
    <Router>
    <Switch>
        <Route exact path= "/" component={Home}/>
        <Route exact path= "/Restaurants/:id" component={Restaurants}/>
        <Route exact path= "/Restaurants/:id/Update" component={Update}/>
        <Route exact path= "/SignUp" component={SignUp}/>
    </Switch>
    </Router>
</div>

</ContextProvider>
</div>;
};
export default App; 