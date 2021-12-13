import React,{createContext,useState} from 'react'

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
    
    const [users, setUsers] = useState([]);



     const [balance, setBalance] = useState(2000);

     const [cart, setCart] = useState([
        {
            id: 1,
            from: "SWA",
            to: "LAX",
            date: "10/10/2021",
            price: 2000
        }
     ])

     const [flights, setFlights] = useState([ 
       
            {
                id: 1,
                from: "SWA",
                to: "LAX",
                date: "10/10/2021",
                price: 2000
            },
            {
                id: 2,
                from: "ESB",
                to: "IST",
                date: "08/09/2021",
                price: 1000
            },
            {
                id: 3,
                from: "RIZE",
                to: "IST",
                date: "08/09/2021",
                price: 1000
            }

      
        ])

   
    
    return (
        <GlobalContext.Provider value={{balance,setBalance,flights,setFlights,cart,setCart,users,setUsers}}>
            {props.children}
        </GlobalContext.Provider>

        
    )
}

