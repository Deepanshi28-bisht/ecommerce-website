import { useState } from "react";
import { CartContext } from "./cartContext";

const CartProvider=({children})=>  

    {
    const [count,setCount]=useState(0);
    const increaseCount=()=>{
        setCount(count+1);
    }
    return(
       <CartContext.Provider value={{count,increaseCount,}}>
        {children}
       </CartContext.Provider>
    )
}



export default CartProvider;
