import React from 'react';
import Routes from './router/Routes';
import './App.css';
import GlobalContextProvider from "./context/GlobalContext";


function App() {
	
  return (
    <div>
       <GlobalContextProvider>
    	<Routes/>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
