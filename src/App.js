import React,{useContext} from "react";
import {GlobalContextProvider} from "./GlobalContext";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Register from "./components/Register";

import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import FlightList from "./components/FlightList";



function App() {

  return (

    <GlobalContextProvider>
         <Router>
      <Switch>
    <div>
      
      <Route  path="/" exact component={Login} />
      <Route  path="/flightList" component={FlightList}/>
      <Route  path="/register" component={Register}/>


  
    
    </div>
    </Switch>
    </Router>
    
    </GlobalContextProvider>
  );
}

export default App;
