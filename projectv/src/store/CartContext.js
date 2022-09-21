import React from "react";

const CartContext = React.createContext({
    items: [],
     totalQuantity: 0,
    
})

export default CartContext;