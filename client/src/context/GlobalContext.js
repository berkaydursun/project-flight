import React, { createContext, useState, useEffect } from 'react'


export const GlobalContext = createContext();


const GlobalContextProvider = (props) => {
   

   
    const initialState = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(initialState);
    const [balance, setBalance] = useState(2000);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addCart = (item) => {
        const newCart = [...cart, item]
        setCart(newCart);
        console.log(newCart);
    }

    const buy = () =>{
        setBalance(balance - sum)
        setCart([]);
    }

    var sum = 0;
    cart.forEach(function (obj) {
        sum += obj.price;
    });
 
    // var sum = 0;
    // cart.forEach(function (obj) {
    //     sum += obj.i_price;
    // });



    return (
        <GlobalContext.Provider value={{  addCart, cart, setCart,balance,setBalance,buy,sum }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;