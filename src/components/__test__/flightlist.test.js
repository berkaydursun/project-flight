import React from 'react';
import ReactDOM from 'react-dom';

import FlightList from '../FlightList';
import {isTSAnyKeyword} from '@babel/types';


it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<FlightList></FlightList>,div)
});
