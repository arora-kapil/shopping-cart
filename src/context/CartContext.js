import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item]);
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;