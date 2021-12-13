import React, { useState, useContext, useEffect } from 'react'
import Flight from "./Flight";
import { GlobalContext } from "../GlobalContext";
import Nav from './Nav';
import BuyWindow from './BuyWindow';




const FlightList = () => {
    const { flights, setFlights } = useContext(GlobalContext);

   

    return (
        <>
            <Nav/>
            <Flight flights={flights} />
            <BuyWindow /> 
          
        </>
    )
}


export default FlightList;